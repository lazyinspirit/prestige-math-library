---
id: def-random-access-and-register-machine-programs
kind: definition
title: "Register programs and RAM programs with unbounded natural-number memory"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-natural-numbers]
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Notes on Formal Languages, Automata, Computability, and Complexity"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Charles Brubaker and Lance Fortnow, Church-Turing Thesis lesson notes"
      url: "https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html"
---

## Definition

A **register-memory state** is a function
$$ R:\mathbb N\to\mathbb N $$
with finite support, so only finitely many registers hold nonzero values
([[def-function]], [[def-natural-numbers]]).

A **register program** is a finite instruction list with a program counter,
acting on such states by instructions of the following kinds:

- assignment of constants or copies, such as $R_i:=0$ and $R_i:=R_j$;
- successor and predecessor-type updates, such as $R_i:=R_j+1$ and
  $R_i:=\max(R_j-1,0)$;
- conditional branches testing whether a named register is zero;
- halting instructions for accept, reject, or output.

A **RAM program** is such a program together with indirect-addressing
instructions
$$ R_i:=R_{R_j},\qquad R_{R_i}:=R_j, $$
so the content of one register may be used as the address of another. On this
page, the phrase **RAM/register program** refers to this unbounded-memory
model; a pure register program is the special case without indirect addressing.

For binary input $w=b_0\cdots b_{\ell-1}$, the standard initial memory layout
is
$$ R(0)=\ell,\qquad R(i+1)=b_i\ \ (0\le i<\ell),\qquad R(j)=0\ \ (j>\ell). $$
A halting memory state **outputs** the binary word $u=c_0\cdots c_{m-1}$ when
$$ R(0)=m,\qquad R(i+1)=c_i\ \ (0\le i<m),\qquad R(j)=0\ \ (j>m). $$

## Remarks

- The memory is unbounded because there are countably many possible register
  addresses, but every individual configuration uses only finitely many
  nonzero entries.

- This item fixes a computability model, not a complexity convention. No
  unit-cost or logarithmic-cost claim is built into the definition.
