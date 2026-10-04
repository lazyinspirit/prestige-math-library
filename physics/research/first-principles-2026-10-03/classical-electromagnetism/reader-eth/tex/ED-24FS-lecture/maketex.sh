#!/bin/bash
# -*- coding: UTF-8; -*-
# vim: set fenc=utf-8
# Elektrodynamik, Lecture Notes, see README.txt for information

srcmain="Lecture"
srcsec="Chap"
trgmain="Skript"
trgsec="Kapitel"
secnum="00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 A1 A3"

if [ -z $1 ]
then
  echo "Usage:
  $0 number
    number: number of chapter
  $0 filename
    filename: target file to be compiled"
  exit 1
fi

num="$1"
nl=$'\n'
secokay=""
make=".pdf"

for v in $trgsec $trgmain
do
  if [[ $num =~ ^$v ]]
  then
    num=${num#$v}
    if [[ $num =~ ^.*\.tex$ ]]; then make=".tex"; fi
    num=${num%%.*}
  fi
done

if [[ $num =~ ^[0-9]$ ]]; then num="0$num"; fi

if [[ -z $num ]]; then secokay="okay"; fi
for v in $secnum
do
  if [[ "$num" == "$v" ]]; then secokay="okay"; fi
done

if [[ -z $secokay ]]
then
  echo "error: unknown chapter"
  exit 1
fi

if [[ "$make" == ".pdf" ]]; then nl=""; fi

function docompile
{
  if [[ -z $num ]]
  then
    job="$trgmain"
    fwd="\\childdocforward{$srcmain}"
  else
    job="$srcsec$num"
    fwd="\\childdocforward[$srcmain]{$srcsec$num}"
  fi
  body="\\def\\jobname{$job}$optdef\\input{childdoc.def}$fwd"
  for pass in first main extra
  do
    par="";
    if [[ "$pass" == "first" ]]; then par="-draftmode"; fi
    drop="This is|entering extended mode|\\write18"
    drop="$drop|Preloading the plain mem file|mpost\.mp|plain\.mp"
    pdflatex -shell-escape -interaction=batchmode $par \
      -jobname "$trg" "$body" | grep -vE "$drop"
    if [[ "$pass" != "main" ]]; then continue; fi
    if ! (grep -E -q "may have changed|rerunfilecheck Warning" "$trg.log"); then break; fi
  done
  grep -E "^! |Warning|Error|Undefined|Overfull|Underfull" "$trg.log"
}

function writesource
{
  if [[ -z $num ]]
  then
    fwd="\\childdocforward{$srcmain}"
  else
    fwd="\\childdocforwardprefix[$srcmain]{$target}{$srcsec}"
  fi
  body="$optdef\\input{childdoc.def}$nl$fwd"
  echo "$body" > $trg.tex
}

if [[ -z $num ]]
then
  target="$trgmain"
else
  target="$trgsec"
fi
trg="$target$num"
optdef="\\def\\editing{N}$nl"
if [[ "$make" == ".pdf" ]]; then docompile; else writesource; fi

echo
