# -*- coding: UTF-8; -*-
# vim: set fenc=utf-8
# Elektrodynamik, Lecture Notes, see README.txt for information

SRCMAIN = Lecture
SRCSEC = Chap
TRGMAIN = Skript
TRGSEC = Kapitel
SECNUM = 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 A1 A3
PREREQS = $(SRCMAIN).tex coursedef.sty
FIG = Fig

SRCSECFILES = $(SECNUM:%=$(SRCSEC)%.tex)
TRGMAINFILES = $(TRGMAIN).pdf
TRGSECFILES = $(SECNUM:%=$(TRGSEC)%.pdf)
GENFILES = $(TRGMAIN).tex $(SECNUM:%=$(TRGSEC)%.tex)
BAKFILES = $(PREREQS) $(SRCSECFILES) $(GENFILES) Makefile maketex.sh pack.sh README.txt

default: all ;
main: $(TRGMAINFILES) ;
chapters: $(TRGSECFILES) ;
all: main chapters ;
sources: $(GENFILES) ;

$(TRGSEC)A3.pdf: $(SRCSECFILES)

$(TRGMAINFILES): $(SRCSECFILES) $(PREREQS)
	bash ./maketex.sh $@
$(TRGSEC)%.pdf: $(SRCSEC)%.tex $(PREREQS)
	bash ./maketex.sh $@
$(GENFILES):
	bash ./maketex.sh $@

touch:
	touch $(SRCMAIN).tex
clean:
	rm -f $(foreach ext,.aux .log,$(SECNUM:%=$(SRCSEC)%$(ext)))
	rm -f $(SECNUM:%=$(TRGSEC)%.log) $(TRGMAIN).log
	rm -f $(foreach ext,.aux .log .out .ist .toc .los .ilg .ind .idx,$(SRCMAIN)$(ext))
	rm -f $(foreach ext,.mp .mpx -*.mps -tmp.log -tmp.mp -tmp.mpx,$(SRCMAIN)$(ext))
	rm -f mpxerr.tex mpxerr.log mpxerr.dvi texput.log
	rm -f $(foreach ext,.mp .mpx .log -*.mps,$(SECNUM:%=$(FIG)%$(ext)))
clean-bak:
	rm -f $(BAKFILES:%=%~) $(BAKFILES:%=%.bak)
clean-all:  clean
	rm -f $(TRGSECFILES) $(TRGMAINFILES) $(GENFILES)
	rm -f $(SECNUM:%=$(SRCSEC)%.pdf) $(SRCMAIN).pdf
