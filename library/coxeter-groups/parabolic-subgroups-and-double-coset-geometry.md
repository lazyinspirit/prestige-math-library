---
page: parabolic-subgroups-and-double-coset-geometry
title: "Parabolic Subgroups and Double Coset Geometry"
status: draft
requires: [coxeter-presentations-exchange-and-reduced-word-theorems,
           canonical-roots-signs-and-faithful-reflections]
items: [def-cg-parabolic-quotient-and-two-sided-minima,
        lem-cg-double-coset-descent-reduction-and-minimality,
        thm-cg-parabolic-intersections-and-coset-factorization,
        lem-cg-double-coset-intersection-parabolic,
        thm-cg-double-coset-unique-minimum-and-normal-form]
examples: []
---

Coset factorization is the algebraic form of moving to a face of a chamber. Unique minimum representatives, intersections and double cosets need separate arguments; an arbitrary subgroup is not automatically parabolic.

This page fixes the parabolic calculus of a Coxeter system: standard parabolic
subgroups and their one- and two-sided transversals, the parabolic root
subsystem, and the unique minimum of a parabolic double coset with its additive
normal form. It is the algebraic counterpart of moving between faces of a
chamber on the geometric pages, and it supplies the quotients $W^I$, ${}^IW$ and
${}^IW^J$ used by the later Bruhat, Davis-complex and growth pages.

## Definition and conventions

[[def-cg-parabolic-quotient-and-two-sided-minima]] introduces $W_I=\langle
s:s\in I\rangle$, the descent sets $D_L,D_R$, the quotients
$W^I=\{w:\ell(ws)>\ell(w)\ (s\in I)\}$ and ${}^IW=\{w:\ell(sw)>\ell(w)\
(s\in I)\}$, their two-sided intersection ${}^IW^J$, and the notions of a
parabolic subgroup (a conjugate of a standard one) and of a reflection subgroup.
The left/right conventions are fixed once and used consistently; no converse
from reflection subgroups to parabolics is asserted, and the companion page
computes the two test cases that separate the three classes.

## Main results

[[thm-cg-parabolic-intersections-and-coset-factorization]] proves
$W_I\cap W_J=W_{I\cap J}$, identifies the parabolic root subsystem
$\Phi_I$ as the roots lying in the span $V_I$ of the simple roots indexed by $I$,
so $\Phi_I=\Phi\cap V_I$, and
shows that the transversal elements of the one-sided quotients are *global*
minima of their cosets, not merely locally descent-free words. The converse
containment $\Phi\cap V_I\subseteq\Phi_I$ is proved by induction on the length
of the reflection with a given root, using the root sign criterion and the
root-length criterion twice.

[[lem-cg-double-coset-descent-reduction-and-minimality]] supplies the
minimality input the rest of the page needs: descent reduction shows that every
double coset contains a descent-free element, and the middle-block argument on a
reducing word shows that for $d\in{}^IW^J$ the element $d$ is the unique minimum
of $W_IdW_J$, with an additive factorization of every element of the coset.
[[lem-cg-double-coset-intersection-parabolic]] then proves
$W_I\cap dW_Jd^{-1}=W_K$ for $K=\{s\in I:d^{-1}sd\in J\}$ by strong exchange at
the first letter of a reduced expression, and records the warning that a
conjugated reflection $d^{-1}sd$ lying in $W_J$, with $s\in I$ and
$d\in{}^IW^J$, is necessarily a *simple* root reflection, not an arbitrary positive combination of simple roots.

[[thm-cg-double-coset-unique-minimum-and-normal-form]] assembles these pieces:
each double coset has a unique descent-free element, its minimum, and every
element of the coset has a unique representation $x=udv$ with
$u\in W_I^K$, $v\in W_J$ and length additivity
$\ell(x)=\ell(u)+\ell(d)+\ell(v)$. The transversal restriction on the first
factor is recorded explicitly, together with the computation showing that an
arbitrary $u\in W_I$ destroys uniqueness.

## Prerequisites and reading

Required earlier pages: [[coxeter-presentations-exchange-and-reduced-word-theorems]]
for the presented group, its length function and the exchange, deletion and
parabolic-minimal-representative theorems, and
[[canonical-roots-signs-and-faithful-reflections]] for the root sign criterion,
the root-length criterion and the root-reflection dictionary. The companion
[[parabolic-subgroups-and-double-coset-geometry-examples]] tests the
constructions in $S_4$ and in the infinite dihedral group.
