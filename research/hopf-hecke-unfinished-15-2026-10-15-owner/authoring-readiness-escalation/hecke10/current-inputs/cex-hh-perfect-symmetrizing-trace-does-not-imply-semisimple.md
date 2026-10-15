---
id: cex-hh-perfect-symmetrizing-trace-does-not-imply-semisimple
kind: counterexample
title: "A perfect symmetrizing trace does not imply semisimplicity"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-canonical-hecke-trace-and-symmetrizing-form, thm-hh-canonical-hecke-trace-is-symmetric-and-perfect, def-hh-universal-coxeter-hecke-parameters-and-presentation, thm-hh-generic-coxeter-hecke-standard-basis, def-simple-module, def-semisimple-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras (EPFL lecture notes, arXiv:math/0511548v2)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Section 4, printed pp. 6-7: the canonical trace pairing over an arbitrary commutative parameter ring and the basis-pair formula"
    - title: "Andrew Mathas, Iwahori-Hecke Algebras and Schur Algebras of the Symmetric Group (self-contained notes, 1998; complete 79-page text)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 1, §2, printed p. 5: Proposition 1.14, the coefficient-at-identity trace pairing and its perfectness in type A"
verification:
  precheck: pass
---

## Statement refuted

The refuted claim is: every finite-dimensional associative unital algebra $A$ over a field $k$ that has a $k$-linear map $\tau:A\to k$ with $\tau(ab)=\tau(ba)$ and with $a\mapsto[b\mapsto\tau(ab)]$ an isomorphism $A\to\operatorname{Hom}_k(A,k)$ has a semisimple left regular module. Here **semisimple module** means a direct sum of simple submodules ([[def-semisimple-module]]), and **simple** means nonzero with no proper nonzero submodule ([[def-simple-module]]).

## Facts & Assumptions

**Given:** The rank-one Coxeter group $W=\{1,s\}$, the universal Hecke algebra $H=\mathbb Z[v^{\pm1}][T]/((T-v)(T+v^{-1}))$, the ring homomorphism $\phi:\mathbb Z[v^{\pm1}]\to\mathbb C$ with $\phi(v)=i$, and the specialized algebra $A=\mathbb C\otimes_{\mathbb Z[v^{\pm1}]}H$.

[F1] The rank-one Hecke relation is $(T-v)(T+v^{-1})=0$, and the generic standard basis is $\{1,T\}$. ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]], [[thm-hh-generic-coxeter-hecke-standard-basis]])

[F2] After any commutative base change, the canonical trace has Gram entries $\tau(T_xT_y)=\delta_{x^{-1},y}$ and induces an isomorphism to the module dual. ([[thm-hh-canonical-hecke-trace-is-symmetric-and-perfect]])

[F3] A semisimple module is a direct sum of simple submodules. ([[def-semisimple-module]])

[F4] A simple module is nonzero and has no submodules other than zero and itself. ([[def-simple-module]])

## Counterexample

1.1 Since $i^{-1}=-i$, the specialization of the quadratic relation in [F1] is $(T-i)^2=0$. The specialized basis is $\{1,T\}$, so $\epsilon:=T-i$ is nonzero and $A\cong\mathbb C[\epsilon]/(\epsilon^2)$. The canonical trace has $\tau(1)=1$, $\tau(T)=0$, and $T^2=1+2iT$; therefore its Gram matrix in $(1,T)$ is $\begin{pmatrix}1&0\\0&1\end{pmatrix}$. The algebra is commutative, so the trace is symmetric, and this matrix is invertible, so its trace pairing is perfect (also as guaranteed by [F2]). [F1, F2, algebra]

1.2 As a left $A$-module, $A\epsilon=\mathbb C\epsilon$ is simple: $\epsilon$ acts as zero on this one-dimensional complex vector space, and scalar elements of $\mathbb C$ act by scalar multiplication, so its only $A$-submodules are $0$ and $\mathbb C\epsilon$ by [F4]. If $x=a+b\epsilon$ with $a\ne0$, then $x$ is a unit, with inverse $a^{-1}-a^{-2}b\epsilon$; hence $Ax=A$, which is not simple because it contains the proper nonzero submodule $\mathbb C\epsilon$. Thus a simple submodule cannot contain an element with nonzero constant coefficient. Every nonzero element with zero constant coefficient generates $\mathbb C\epsilon$, so every simple submodule of $A$ is exactly $\mathbb C\epsilon$. [F3, F4, algebra]

2.1 The sum of all simple submodules of $A$ is consequently $\mathbb C\epsilon$, which is proper because $1\notin\mathbb C\epsilon$. By [F3], the regular module is not a direct sum of simple submodules, so it is not semisimple. Step 1.1 gives a perfect symmetric trace on this finite-dimensional algebra, while this step proves its regular module is not semisimple. This refutes the claim. No choice principle is used. [F3, step 1.1, step 1.2] ∎
