---
id: lem-temperley-lieb-diagram-tower-conditional-expectation-identities
kind: lemma
title: "Right closure is a trace-preserving diagram-tower expectation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-temperley-lieb-diagram-tower-and-right-closure
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - def-temperley-lieb-normalized-markov-trace-by-closure
  - lem-temperley-lieb-closure-trace-is-cyclic-and-markov
justified_by: []
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§2.1.4, Exercise 2.1.12, PDF pp. 7–8: inclusion, closure, trace and Markov identities. The local proof below counts the closed components."
    - title: "Vaughan F. R. Jones, Planar Algebras, I"
      url: "https://arxiv.org/pdf/math/9909027"
      locator: "§4.1, printed pp. 81–82: finite-index expectation and Jones-generator identities; §2.1, pp. 27–29: the diagram tower."
---

## Statement

Let $n\ge1$, $\delta\in\mathbb C^\times$, and let $\iota_n,E_n$ be as in [[def-temperley-lieb-diagram-tower-and-right-closure]]. Then $\iota_n$ is an injective unital algebra homomorphism, $E_n\iota_n=\mathrm{id}$, and for $a,b\in\mathrm{TL}_n$ and $x\in\mathrm{TL}_{n+1}$,
$$
E_n(\iota_n(a)x\iota_n(b))=aE_n(x)b,\qquad \tau_n(E_n(x))=\tau_{n+1}(x).
$$
If $d_n$ is the elementary cup-cap generator on the last two strands, then
$$
E_n(\iota_n(x)d_n)=\delta^{-1}x,\qquad \tau_{n+1}(\iota_n(x)d_n)=\delta^{-1}\tau_n(x).
$$
When $\delta\in\mathbb R$, $\iota_n$ also preserves the reflection involution. Moreover, if $\delta\in\mathbb R^\times$, the involution is compatible with finite-dimensional $C^*$-algebra structures on the tower and the Markov traces are faithful positive traces, then $E_n$ is positive and hence is a positive trace-preserving conditional expectation.

## Facts & Assumptions

**Given:** $n\ge1$, $\delta\ne0$, the diagram tower, its stacking product, right closure, and the normalized closure trace.

[F1] $\mathrm{TL}_n$ is the free complex module on noncrossing $(n,n)$ matchings; stacking identifies the middle boundary, removes each closed cycle with a factor $\delta$, and $d_n$ is the cap-cup diagram on the last adjacent pair. ([[def-temperley-lieb-diagram-category]])

[F2] Stacking is associative, its identity is the vertical matching, and horizontal juxtaposition with a vertical strand respects composition. ([[thm-temperley-lieb-diagram-category-laws]])

[F3] On a basis diagram $D$, $\tau_n(D)=\delta^{c(D)-n}$, where $c(D)$ is the number of components after closing every top point to the corresponding bottom point. ([[def-temperley-lieb-normalized-markov-trace-by-closure]])

[F4] The normalized trace is cyclic and satisfies the tower and one-generator Markov rules by finite component counts. ([[lem-temperley-lieb-closure-trace-is-cyclic-and-markov]])

[F5] $\iota_n$ appends one rightmost vertical strand and $E_n$ is $\delta^{-1}$ times the right closure; for real $\delta$, the involution is conjugate-linear reflection across a horizontal line. ([[def-temperley-lieb-diagram-tower-and-right-closure]])

## Proof

**Proof technique:** direct.

1.1 On a basis diagram, appending a rightmost vertical strand leaves all existing matching pairs unchanged. Distinct diagrams remain distinct after appending it, so freeness in [F1] makes $\iota_n$ injective. Stacking two such appended diagrams creates no new closed component and is the appended version of their original stack, so $\iota_n$ preserves products and the unit. When $\delta$ is real, horizontal reflection also commutes with appending, so it preserves the involution. Right-closing the newly appended vertical strand creates exactly one circle, so $c_n(\iota_n(D))=\delta D$ and $E_n\iota_n(D)=D$. Linearity gives $E_n\iota_n=\mathrm{id}$. [F1, F2, F5, construct]

2.1 For basis diagrams $a,b$ on $n$ strands and $x$ on $n+1$ strands, stack the three diagrams and attach the right closure arc at the right boundary. Every path or cycle in this finite graph is unchanged if the left $n$-strand stacks are performed before the right closure: the closure arc meets only the two rightmost boundary endpoints, and the factors $a,b$ attach only to the left $n$ interfaces. The exterior matching is therefore the product $a c_n(x)b$, with the same number of removed cycles and the same powers of $\delta$. Thus $c_n(\iota_n(a)x\iota_n(b))=a c_n(x)b$. Multiplication by $\delta^{-1}$ proves bimodularity on basis diagrams; bilinearity extends it. [F1, F2, F5, step 1.1, algebra]

3.1 Closing all remaining strands of $c_n(x)$ produces exactly the same closed matching graph as closing all $n+1$ strands of $x$. The normalized factor for $E_n$ is $\delta^{-1}$, so the total normalization changes from $\delta^{-n}$ to $\delta^{-(n+1)}$, exactly the normalization in [F3] for rank $n+1$. Hence $\tau_n(E_n(x))=\tau_{n+1}(x)$ on basis diagrams and then on all $x$. The retraction identity also gives $(\iota_n E_n)^2=\iota_n E_n$ as endomorphisms of $\mathrm{TL}_{n+1}$. [F3, F5, step 1.1, step 2.1, algebra]

4.1 Right-closing $\iota_n(x)d_n$ connects the last cap and cup to the exterior closure arc; the result is the diagram $x$ on the first $n$ strands, with no new circle. Thus $c_n(\iota_n(x)d_n)=x$, so $E_n(\iota_n(x)d_n)=\delta^{-1}x$. Trace preservation and [F4] give $\tau_{n+1}(\iota_n(x)d_n)=\tau_n(E_n(\iota_n(x)d_n))=\delta^{-1}\tau_n(x)$. [F1, F4, F5, step 3.1, algebra]

5.1 Suppose $x\ge0$ in the finite-dimensional $C^*$-algebra $\mathrm{TL}_{n+1}$ and the traces are faithful and positive. On each basis matching, reflecting before closing produces the same retained $(n,n)$ matching and the same closed components as closing before reflecting; the scalar $\delta^{-1}$ is real. Hence $E_n(x^*)=E_n(x)^*$, so $E_n(x)$ is self-adjoint. For every $b\in\mathrm{TL}_n$, trace preservation and bimodularity give $\tau_n(b^*E_n(x)b)=\tau_{n+1}(\iota_n(b)^*x\iota_n(b))\ge0$. If $E_n(x)$ had a negative spectral subspace, its nonzero spectral projection $p$ would satisfy $\tau_n(pE_n(x)p)<0$, since $pE_n(x)p$ is strictly negative on that subspace and $\tau_n$ is faithful; this contradicts the same inequality with $b=p$. Thus $E_n(x)\ge0$. It is unital, idempotent, bimodular and trace-preserving by the preceding steps, so it is a positive conditional expectation in the stated $C^*$-positive regime. [F1, F5, step 1.1, step 2.1, step 3.1, algebra] ∎
