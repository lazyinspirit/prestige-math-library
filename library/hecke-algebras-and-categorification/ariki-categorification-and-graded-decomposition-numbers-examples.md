---
page: ariki-categorification-and-graded-decomposition-numbers-examples
title: "Ariki Categorification and Graded Decomposition Numbers — Examples"
status: published
requires: [ariki-categorification-and-graded-decomposition-numbers]
items: []
examples: [ex-projective-versus-simple-grothendieck-classes-in-a-small-block,
           cex-specializing-v-to-one-forgets-graded-decomposition-information]
---

**Objective.** This companion page works the smallest non-semisimple block of
the level-one theory on [[ariki-categorification-and-graded-decomposition-numbers]].
The example takes $F=\mathbb C$, $\xi=-1$, $e=2$ and $d=2$, where the Hecke
algebra is the local algebra $\mathbb C[t]/(t^2)$ with $t=T_1+1$ and
$\deg t=2$; it computes the unique simple $D$, the unique indecomposable
projective $P=H^\Lambda_2$, the graded composition series
$0\subset tP\subset P$ with $tP\cong D\{2\}$ and hence
$[P]=(1+q^2)[D]$, the graded Specht classes $[S(1,1)]=[D]$ and
$[S(2)]=q[D]$, the Fock data $G(1,1)=M_{1,1}+qM_{(2)}$ and
$G^*(1,1)=(M_{1,1}+qM_{(2)})/(1+q^2)$, the transported identifications
$[P]\mapsto G(1,1)$ and $[D]\mapsto G^*(1,1)$, and the graded Cartan values
$h([P],[D])=1$, $h([P],[P])=1+q^2$ against the composition multiplicity
$[P:D]_q=1+q^2$. The counterexample records that specializing $q$ to $1$
identifies the distinct classes $[P]=(1+q^2)[D]$ and $2[D]$, and the distinct
classes $[S(1,1)]=[D]$ and $[S(2)]=q[D]$, so the forgetful map genuinely loses
the graded decomposition information, the graded Cartan entries and the shift
classes. Every computation here is a finite explicit verification; both items
consume the parent page and its proved suppliers, and nothing outside this pair
depends on anything homed here.
