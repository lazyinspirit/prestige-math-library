---
id: prop-specialization-at-q-one-recovers-the-classical-enveloping-relations
kind: proposition
title: "Specialization at q=1 recovers the classical enveloping relations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-drinfeld-jimbo-quantized-enveloping-algebra, def-lusztig-divided-power-integral-form, def-quantum-integers-factorials-and-divided-powers-at-q-i, def-quantum-weight-module-and-integrability, lem-q-one-toral-specialization-identifies-the-classical-cartan-generators, lem-quantum-pascal-recurrence-and-gaussian-integrality, lem-rational-local-quantum-halves-and-torus-specialize-at-q-one, thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing, thm-serre-presentation-of-a-kac-moody-algebra]
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
axiom_use: "The Axiom of Choice is used only through [[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]](i), to equate the classical PBW ranks of the Kac-Moody halves with the generic half dimensions. The Serre-relation computation, the surjectivity of the half maps, the toral and mixed-relation specializations and every operator statement are choice-free."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Math 263C Quantum Groups (Stanford, 2022), lecture slides 'Lusztig's quantum group. Tilting modules. The Fusion Category in Action'"
      url: "http://sporadic.stanford.edu/quantum/lecture16.pdf"
      locator: "PDF pp. 7, 9-10: generators of the restricted A-form, the toral product definition, and equal-exponent divided-power reordering. These slides provide integral-form background, not a proof of the generic highest-weight or lattice claims. The printed shift recurrence on PDF p. 10 has a typo; any shift identity used here is derived locally from the product."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.2.1, Theorem 13.2.1.10, printed p. 317: the rational weight-lattice and classical operator comparison in finite type. The algebra-level specialization and general lattice statements here are proved by the local suppliers."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 33, §33.1, printed pp. 257-260: the specialization at $q=1$ and the comparison with the classical enveloping algebra (read via the owner's recorded OCR pass)."
---

## Statement

Let $(I,A,D,P,P^{\vee},q)$ be a finite symmetrizable Cartan datum, $A=\mathbb Z[q,q^{-1}]$,
$U_A$ the integral form of [[def-lusztig-divided-power-integral-form]], and $k$
a characteristic-zero field regarded as an $A$-algebra by $q\mapsto1$. Let
$\mathfrak g_{\mathrm{der}}$ be the classical Lie algebra presented by
generators $e_i,f_i,h_i$ with the Cartan and Serre relations, its Cartan being
the span of the independent simple coroots
([[thm-serre-presentation-of-a-kac-moody-algebra]]).

(a) **Halves.** $U_A^\pm\otimes_Ak\cong U(\mathfrak n^\pm)_k$ by
$F_i\mapsto f_i$, respectively $E_i\mapsto e_i$.

(b) **Positive quotient.** The quotient
$(U_A\otimes_Ak)/(K_h-1:h\in P^{\vee})$ is isomorphic to
$U(\mathfrak g_{\mathrm{der}})_k$; in it $\bar H_i=\bar T_{i,0,1}$ is the
classical coroot generator, $\bar T_{i,c,t}=\binom{H_i+c}{t}$, and the positive
toral quotient is $k[H_i:i\in I]$ with kernel exactly
$(K_h-1:h\in P^{\vee})$.

(c) **Operator form.** On every $U_A$-stable label-graded lattice the quotient
action of (b) is automatic: $\bar K_h=\mathrm{id}$, the $\bar T_{i,c,t}$ act by
the integer binomials $\binom{\langle\mu,h_i\rangle+c}{t}$, and all classical
Cartan and Serre operator relations hold, without any unproved global
$\mathbb Z[q,q^{-1}]$-freeness.

(d) **Boundaries.** The unquotiented specialization $U_A\otimes_Ak$ is *not*
identified with $U(\mathfrak g_{\mathrm{der}})_k$: it retains toral characters,
as the integral $\mathfrak{sl}_2$-representation with $E=F=0$, $K=-1$ shows.
Extra Cartan directions of a regular realization act diagonally on
label-graded modules; they are not fabricated as generators of the toral
integral form, and direct substitution $q=1$ into vanishing denominators
$q_i^s-q_i^{-s}$ is never performed anywhere in this comparison.

## Facts & Assumptions

**Given:** The integral form over $A$, the local DVR $R=\mathbb Q[q]_{(q-1)}$, a characteristic-zero field $k$ with $A\to k$, $q\mapsto1$, and the classical presentation data of $\mathfrak g_{\mathrm{der}}$.

[F1] The rational-local theorem: $U_A\otimes_AR=U_R$ is the generated $R$-subalgebra; each $U_R^\pm[\pm\nu]$ is finite free with $q=1$ fibre the classical half $U(\mathfrak n^\pm)$; the toral $R$-basis is $\{K_c\prod_iK_i^{\delta_i}H_i^{t_i}\}$ with $H_i=T_{i,0,1}$; multiplication $U_R^-\otimes_RU_R^0\otimes_RU_R^+\to U_R$ is an isomorphism; and the positive toral quotient is $k[H_i]$ with $\bar T_{i,c,t}=\binom{H_i+c}{t}$ and kernel exactly $(K_h-1:h\in P^{\vee})$ ([[lem-rational-local-quantum-halves-and-torus-specialize-at-q-one]](a)-(c)).

[F2] The full positive quotient is $U(\mathfrak g_{\mathrm{der}})_k$: the specialized Serre, mixed and shifted toral relations give a surjection from the classical enveloping algebra, and the map is an isomorphism on each factor of the negative-toral-positive decompositions of [F1] and of the classical algebra (classical PBW); multiplication intertwines these tensor decompositions, so the surjection is injective ([[lem-rational-local-quantum-halves-and-torus-specialize-at-q-one]](c), [[thm-serre-presentation-of-a-kac-moody-algebra]]).

[F3] The rank comparison used by [F1] is the published generic/classical rank theorem (i), which assumes AC; it is the only AC input ([[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]], [[def-axiom-of-choice]]).

[F4] On a $U_A$-stable label-graded lattice, $\bar K_h=\mathrm{id}$, $\bar T_{i,c,t}$ acts by $\binom{\langle\mu,h_i\rangle+c}{t}\in\mathbb Z$, and the classical Cartan and mixed relations $[\bar E_i,\bar F_j]=\delta_{ij}\bar H_i$, $[\bar H_i,\bar E_j]=a_{ij}\bar E_j$, $[\bar H_i,\bar F_j]=-a_{ij}\bar F_j$ hold ([[lem-q-one-toral-specialization-identifies-the-classical-cartan-generators]](b)).

[F5] Gaussian binomials at integer labels are Laurent polynomials specializing to the ordinary binomials, hence give integer scalar operators; the Serre elements of the Drinfeld-Jimbo presentation specialize coefficientwise to the classical Serre elements ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]], [[def-quantum-integers-factorials-and-divided-powers-at-q-i]], [[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F6] The unquotiented specialization retains toral characters: for $\mathfrak{sl}_2$, the assignment $E=F=0$, $K=-1$ is an integral representation whose toral binomials act by $(-1)^t\binom{c}{t}$-type scalars and whose $K$ image at $q=1$ is $-1\ne1$ ([[lem-rational-local-quantum-halves-and-torus-specialize-at-q-one]](c); [[def-quantum-weight-module-and-integrability]] for label-graded modules, where $K_h$ acts by $q^{\langle\mu,h\rangle}\mapsto1$).



## Verification

**Proof technique:** localize to the DVR, invoke the rational-local theorem for the halves, torus and full positive quotient, invoke the graded-lattice lemma for the operator form, and record the two boundary warnings.

1.1 Halves and positive toral quotient. By [F1], localizing at $R$ makes every $[r]_i!$ a unit, so each half is generated by its ordinary generators; the finite free components have $q=1$ fibres isomorphic to the classical halves, and the positive toral quotient is $k[H_i]$ with $\bar T_{i,c,t}=\binom{H_i+c}{t}$ and the stated exact kernel. Since $k$ is an $A$-algebra through $A\to R\to k$, base change along $A\to k$ factors through $R$ and gives (a) and the toral part of (b). [F1, F3, algebra]

1.2 The full positive quotient. By [F1] the multiplication map over $R$ is an isomorphism, so after $\otimes_Rk$ the quotient $(U_A\otimes_Ak)/(K_h-1)$ has the vector-space decomposition $U(\mathfrak n^-)_k\otimes_kk[H_i]\otimes_kU(\mathfrak n^+)_k$; by [F2] the specialized relations give an isomorphism with $U(\mathfrak g_{\mathrm{der}})_k$. In this isomorphism $\bar H_i=\bar T_{i,0,1}$ corresponds to the classical coroot generator $h_i$, and $\bar T_{i,c,t}=\binom{H_i+c}{t}$; the kernel of the toral projection is exactly the ideal generated by the $K_h-1$. This proves (b). [F1, F2, F5, algebra]

1.3 Operator form on graded lattices. Part (c) is [F4]: the specializations of $K_h$ and $T_{i,c,t}$ on a $U_A$-stable label-graded lattice are the identity and the integer binomial scalars, and the mixed, Cartan and Serre relations hold as operator identities by reducing the integral relations; no freeness beyond the lattice's own graded structure is needed. [F4, F5, algebra]

2.1 Boundaries. The unquotiented specialization is strictly bigger than the positive quotient in general: the $\mathfrak{sl}_2$ witness of [F6] has $K$ acting by $-1$ after $q=1$, so it cannot factor through the quotient by $K-1$, and in particular the unquotiented specialization is not identified with $U(\mathfrak g_{\mathrm{der}})_k$. Extra Cartan directions of a regular realization act diagonally on label-graded modules through the labels ([F4]); they are not added as new algebra generators of the toral integral form, whose generators are the $K_h^{\pm1}$ and the $T_{i,c,t}$ only. All divisions in the argument were performed inside $R$ on units; a vanishing denominator $q_i^s-q_i^{-s}$ is never substituted by $q=1$. This completes (d) and the proposition. [F1, F4, F5, F6, algebra] ∎
