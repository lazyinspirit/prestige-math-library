---
page: temperley-lieb-root-of-unity-and-modular-representation-theory
title: "Temperley–Lieb Root-of-Unity and Modular Representation Theory"
status: draft
items:
  - def-temperley-lieb-complex-critical-labels-and-reflection
  - lem-temperley-lieb-critical-standard-modules-are-simple
  - lem-temperley-lieb-zero-loop-perfect-matching-standard-module-is-simple
  - def-temperley-lieb-spencer-digit-support
  - def-temperley-lieb-negligible-morphisms
  - lem-temperley-lieb-negligible-morphisms-form-tensor-ideal
  - def-temperley-lieb-negligible-quotient-category
examples: []
---

This page keeps three separate subjects: complex root-of-unity standard modules, Spencer’s arbitrary-characteristic decomposition theory, and the negligible quotient/TLJ category. A result in one subject is not used to fill a proof gap in another.

Companion: [[temperley-lieb-root-of-unity-and-modular-representation-theory-examples]].

## Reading prerequisite

The controlling plan requires [[temperley-lieb-semisimplicity-and-generic-structure]]. The earlier cellularity page is useful reading context, but the current plan does not declare it as a direct requires edge.

## 1. Complex roots of unity

Fix $q\in\mathbb C^\times$, $\delta=q+q^{-1}$, rank $n\ge0$, and arc count $p$ with $0\le p\le\lfloor n/2\rfloor$; the defect count is $t=n-2p$. The critical parameter is $\kappa=\operatorname{ord}(q^2)$, kept distinct from the recurrence quantum characteristic $\ell$. In particular at $q=\pm1$, $\kappa=1$ but $\ell=\infty$. The exact critical and reflected-label conventions are [[def-temperley-lieb-complex-critical-labels-and-reflection]].

The supplied local results establish that every critical complex standard module has nondegenerate capping form and is simple ([[lem-temperley-lieb-critical-standard-modules-are-simple]]). This includes the $\kappa=1$ case and all critical labels at $\kappa=2$. The exceptional $\delta=0$, $n=2p>0$ perfect-matching standard module has identically zero ordinary form, but its actual module is simple by a separately proved renormalized-pairing and generator argument ([[lem-temperley-lieb-zero-loop-perfect-matching-standard-module-is-simple]]). Its zero form quotient is not used to infer its head.

The full noncritical classification remains an owner escalation. The retained claims are the root-specific radicals and simple heads of every standard module, their composition factors and reflection linkage (including the boundary where the reflected label is absent), inter-standard Hom spaces, and projective covers. The exact small-order branches must remain separate: $\kappa=1$; $\kappa=2$ with $\delta=0$, including both odd and even $n$ and the $n=2p$ zero-form case; and $\kappa\ge3$. Goodman–Wenzl’s proof assumes characteristic zero, a primitive root, and order greater than three; it does not supply the missing $\kappa=2,3$ cases or the complete local module classification. Ridout–Saint-Aubin §§5–8 give a detailed complex treatment, but their source arguments have not been reproduced here for the noncritical radicals, Hom spaces, or projectives.

Proposed A-page suppliers for that gap are **lem-temperley-lieb-root-noncritical-radicals-and-simple-heads**, **thm-temperley-lieb-root-interstandard-hom-spaces**, and **thm-temperley-lieb-root-projective-covers**, with any necessary central-element, induction, and restriction helpers placed on this A page. These are proposed future items, not existing suppliers or proved claims.

## 2. Arbitrary characteristic and Spencer digits

For a field $K$ of characteristic $P$ (with $P=\infty$ in characteristic zero), a loop value $\delta\in K$, and recurrence quantum characteristic $\ell$, the exact digit and support-set convention is defined in [[def-temperley-lieb-spencer-digit-support]]. The support calculation in [[ex-temperley-lieb-spencer-support-digits-eleven]] is purely arithmetic.

The full Spencer composition claim is retained with its source conventions: write $S(n,m)=W_{n,m}(K,\delta)$, with the left/right convention converted by diagram reflection, for the standard module with $m$ propagating strands, and let $D(n,r)$ denote the nonzero simple cell-form quotient of $W_{n,r}$. Here $m,r$ are admissible defect labels: $0\le m,r\le n$ and $n-m,n-r$ are even. With $\operatorname{Supp}_{\ell,P}(r)$ defined from the digits of $r+1$, the claim is that $D(n,r)$ is a composition factor of $S(n,m)$ exactly when $m\in\operatorname{Supp}_{\ell,P}(r)$, with multiplicity one. This is an authoring obligation, not a consequence of the digit definition or the example.

The separate field-level normalized Jones–Wenzl claim is also retained: over a field, index $N$ has a normalized annihilating Jones–Wenzl idempotent exactly when $N<\ell$, or when $N=a\,s_i-1$ for $i\ge1$ and a finite scale $s_i$ with $1\le a<P$. In characteristic zero this includes every $N=a\ell-1$ with $a\ge1$; when $\ell=\infty$, every finite $N$ lies in the first branch. The field criterion [[thm-temperley-lieb-spencer-jones-wenzl-existence-criterion]] is proved on its owning A page using a split integral diagram representation, the quantum-binomial existence test, and a complete digit reduction; this does not establish the separate full composition-factor classification. Field-level existence does not establish descent over an arbitrary coefficient ring: denominators and required inverses need a separate ring argument.

The proposed A-page supplier for the remaining decomposition obligation is **thm-temperley-lieb-spencer-decomposition-numbers**. The separate field-level Jones–Wenzl proof is supplied by its existing owning page. The decomposition supplier must prove Spencer’s Theorem 8.4 under its field and quantum-characteristic hypotheses, with the imported support and candidate-morphism arguments in §§4–8 either proved locally or supplied explicitly. A separate **lem-temperley-lieb-jones-wenzl-ring-descent** would be needed for any coefficient-ring conclusion. These are owner escalations, not silently omitted claims.

## 3. Negligible quotient and root tilting centralizers

For every complex loop value $\delta$, negligible morphisms are defined by the unnormalized closure pairing and are proved to form a two-sided composition ideal and tensor ideal ([[def-temperley-lieb-negligible-morphisms]], [[lem-temperley-lieb-negligible-morphisms-form-tensor-ideal]]). At $q=e^{\pi i/\ell}$, $\ell\ge3$, the locally defined $\mathcal{TLJ}_\ell$ is the additive idempotent completion of the quotient ([[def-temperley-lieb-negligible-quotient-category]]).

The semisimplification claim remains an unresolved local proof obligation: prove that this quotient completion is semisimple, identify all of its simple objects and prove the truncated $\mathrm{SU}(2)$ fusion rules, including the endpoint and negligible-object cases. Proposed supplier: **thm-temperley-lieb-jones-negligible-quotient-is-fusion**, placed here after the ideal proof. Chen’s lecture notes give a source treatment, but a source statement is not a local proof.

At a different root-specific level, Iohara–Lehrer–Zhang state that the Jones quotient $Q_n(\ell)=\mathrm{TL}_n/\operatorname{rad}(\operatorname{Tr}_n)$ is the endomorphism algebra of the $n$th reduced tensor power of $\Delta_q(1)$ in the reduced $U_q(\mathfrak{sl}_2)$ tilting category, for $\ell\ge3$ and $q^2$ a primitive $\ell$th root. Their generators $f_i$ satisfy $f_i^2=-(q+q^{-1})f_i$; the diagram generator $d_i$ used here corresponds to $-f_i$, giving the sign translation for the quotient and trace convention. The source theorem is scoped to the Jones quotient and reduced tilting category; unreduced TL and generic Schur–Weyl have separate hypotheses and proof routes. Its proof uses the tilting-module decomposition and imports Andersen’s fusion-category result. A local supplier must define that category, establish the precise quotient-to-endomorphism map or isomorphism, and prove the required image/kernel statement with those hypotheses. Proposed supplier: **thm-temperley-lieb-jones-quotient-centralizer-in-root-tilting-category**. The current **def-root-of-unity-tilting-and-negligible-quotient-interface** is only a draft interface and does not prove tensor-ideal closure, semisimplicity, fusion, or the centralizer theorem.

## Supplier and proof boundary

The batch dependency file records the actual Batch 59 bodies inspected, their missing manifest entries, and the unresolved page prerequisite. Draft supplier text is not treated as owner acceptance. In particular, the complex-root arguments cite the actual current quantum-integer and Gram-determinant bodies; the modular projector criterion and root-tilting interface are not used as proof premises. The current quantum-integer definition correctly distinguishes $\kappa$ from $\ell$ at $q=\pm1$.
