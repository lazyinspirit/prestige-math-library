---
id: lem-step-by-step-interpreter-for-machine-codes
kind: lemma
title: "A fixed interpreter can execute one encoded machine step"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-effective-encoding-of-turing-machines,
       lem-machine-encoding-is-injective-and-decodable,
       def-turing-machine-configuration,
       def-one-step-configuration-relation]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Statement

For a binary word $w$, write
$$ c(w):=1^{|w|}0w. $$
For binary words $x,y$, write
$$\langle x,y\rangle:=1^{|x|}0xy;$$
the unary prefix determines the length of $x$, after which the unread suffix is
$y$.
Encode a configuration of a coded machine $M=(m,s,n,\tau)$ by the binary word
$$ \ulcorner C\urcorner:=c(\operatorname{bin}(r))\,c(\operatorname{bin}(q))\,c(\operatorname{bin}(h))\,c(\operatorname{bin}(a_0))\cdots c(\operatorname{bin}(a_r)), $$
where $C=(q,h,t)$, where $r=\max(\{h\}\cup\operatorname{supp}(t))$, and where
$a_j=t(j)$ for $0\le j\le r$. Then there is a deterministic one-tape Turing
machine $I_{\mathrm{step}}$ with input alphabet $\{0,1\}$ that, on input
$\langle\ulcorner M\urcorner,\ulcorner C\urcorner\rangle$, returns
$\ulcorner C\urcorner$ when $C$ is halting and returns the code of the unique
one-step successor of $C$ when $C$ is nonhalting. On malformed inputs it halts
with the empty word $\varepsilon$ as a fixed malformed-code output.

## Facts & Assumptions

**Given:** A coded machine $M$ and a candidate coded configuration $C$.

[L1] The chosen machine code has a concrete decoder: it parses a unary arity header and finitely many self-delimiting blocks, checks canonical numerals and the recovered machine-table shape, and either reconstructs the unique machine or reports malformed input, by [[def-effective-encoding-of-turing-machines]] and [[lem-machine-encoding-is-injective-and-decodable]].

[L2] A configuration records the current state, head position, and full finite tape data, and its canonical word extends through the scanned cell even when that cell is blank, by [[def-turing-machine-configuration]].

[L3] From a nonhalting configuration, one step updates the scanned symbol, the state, and the head position according to the transition rule, with the left boundary clamped at cell $0$, by [[def-one-step-configuration-relation]].

## Proof

**Proof technique:** direct.

1.1 Construct $I_{\mathrm{step}}$ as a one-tape machine that uses marked tape symbols and repeated finite sweeps to maintain delimited work zones. On input $z$, it first parses $z=1^\ell0xy$ with $|x|=\ell$: it marks the initial $\ell$ ones, copies exactly the next $\ell$ bits into the machine-code zone, and copies the remaining suffix into the configuration-code zone. A missing separator or fewer than $\ell$ following bits is malformed. These marking, copying, comparison, and delimiter operations require only finite control and repeated one-tape sweeps. [given, construct]

2.1 The interpreter applies the concrete finite parser from [L1] to the machine-code zone $x$. It then parses $y$ block-by-block using $c(w)=1^{|w|}0w$: the first recovered block gives $r$, the next two give $q$ and $h$, and the next $r+1$ blocks give $a_0,\dots,a_r$. It rejects a missing or truncated block, any block that is not a canonical numeral $\operatorname{bin}(j)$, and any unread bits after these $r+4$ blocks. It also checks the configuration conditions from [L2]: $q<m$, $h\le r$, every $a_j<n$, and $a_r\ne0$ whenever $r>h$. Each check is a finite comparison of delimited binary words and is performed by the same marking-and-sweep method. If the pair parse, machine parse, configuration parse, or any check fails, $I_{\mathrm{step}}$ erases its tape and halts with output $\varepsilon$. [L1, L2, step 1.1, construct]

3.1 If the recovered state is accepting or rejecting, then [L2] says the configuration is halting. In that case $I_{\mathrm{step}}$ copies the unchanged configuration code to the leftmost output zone, erases the other zones, and halts. [L2, step 2.1]

3.2 Otherwise the configuration is nonhalting. The interpreter scans the decoded transition table to find the entry for $(q,a_h)$, replaces $a_h$ by the recorded symbol $b$, and updates the state and head position exactly by [L3], including the clamp at cell $0$. If the new head position is $r+1$, it appends a blank block so that the scanned cell is represented. It then removes precisely the trailing blank blocks whose indices exceed both the new head position and the last nonblank cell, recomputes the new value of $r$, and re-encodes every numeral canonically. All of these are finite scans of the delimited table and work zones. [L2, L3, step 2.1, construct]

4.1 By [L3], step 3.2 produces exactly the canonical code of the unique one-step successor. Steps 1.1 and 2.1 halt with $\varepsilon$ on every malformed input, while steps 3.1 and 3.2 cover the halting and nonhalting valid configurations. Thus the single fixed deterministic one-tape machine just constructed has exactly the behavior claimed. [L3, step 2.1, step 3.1, step 3.2] ∎
