---
id: thm-genus-one-canonical-bundle-trivial
kind: theorem
title: "The canonical bundle of a genus-one curve is trivial"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-degree-zero-line-bundle-section-trivial
  - cor-h0-canonical-differentials-genus
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-degree-divisor-proper-curve
  - def-invertible-sheaf
  - def-little-l-divisor
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) course notes, Lectures 24-25"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the duality suppliers. Let $C$ be
a smooth proper geometrically integral curve over a field $k$ of genus $g=1$.
Then $\omega_C$ is isomorphic to $\mathcal O_C$, every canonical divisor is
principal, and $h^0(C,\omega_C)=1$. No rational point of $C$ is needed.

## Facts & Assumptions

**Given:** A field $k$; a smooth proper geometrically integral curve $C$ over $k$ of genus $g=1$; its canonical bundle $\omega_C$ and a canonical divisor $K_C$.

[F1] For a canonical divisor on a smooth proper geometrically integral curve
of genus $g$ one has $\deg_k(K_C)=2g-2$; for $g=1$ therefore
$\deg_k(K_C)=0$. ([[cor-canonical-degree-two-g-minus-two]])

[F2] The canonical sheaf has $h^0(C,\omega_C)=g$ and $l(K_C)=g$ for every
canonical divisor; for $g=1$ therefore $h^0(C,\omega_C)=1$ and
$l(K_C)=1$, so $H^0(C,\omega_C)$ is one-dimensional and nonzero.
([[cor-h0-canonical-differentials-genus]], [[def-little-l-divisor]])

[F3] A degree-zero invertible sheaf with a nonzero global section is trivial:
if $L$ is invertible on $C$ with $\deg(L)=0$ and $H^0(C,L)\ne0$, then
$L\cong\mathcal O_C$; equivalently, a nontrivial degree-zero invertible sheaf
has no nonzero global section. ([[cor-degree-zero-line-bundle-section-trivial]])

[F4] The canonical bundle is $\omega_C=\Omega^1_{C/k}$, and for a nonzero
rational differential $\omega$ with divisor $K_C=\operatorname{div}(\omega)$
one has $\omega_C\cong\mathcal O_C(K_C)$; the divisors of the nonzero rational
differentials form a single linear equivalence class, so any two canonical
divisors are linearly equivalent. ([[def-canonical-line-bundle-curve]])

[F5] An invertible sheaf on $C$ is locally free of rank one; for the structure
sheaf $\mathcal O_C$ the global sections are the constants and $l(0)=1$, the
degree of $\mathcal O_C\cong\mathcal O_C(0)$ being $\deg_k(0)=0$.
([[def-invertible-sheaf]], [[def-degree-divisor-proper-curve]],
[[def-little-l-divisor]])

[F6] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct; combine $\deg\omega_C=0$ with $h^0(\omega_C)=1$ and
the triviality criterion for degree-zero line bundles.

1.1 (Set-up.) By [F4] the canonical sheaf $\omega_C=\Omega^1_{C/k}$ is invertible and $\omega_C\cong\mathcal O_C(K_C)$ for the canonical divisor $K_C$ of any nonzero rational differential, and the canonical divisors form a single linear equivalence class; by [F1] one has $\deg_k(K_C)=2g-2=0$, and by [F2] one has $h^0(C,\omega_C)=l(K_C)=g=1$. [F1, F2, F4, given]

2.1 The degree of the invertible sheaf $\omega_C$ is computed by the degree of any associated divisor, so $\deg(\omega_C)=\deg_k(K_C)=0$ by step 1.1. [F1, step 1.1]

2.2 By [F2] the space $H^0(C,\omega_C)$ has dimension one, hence is nonzero. [F2, step 1.1]

3.1 Since $\omega_C$ is an invertible sheaf of degree zero with nonzero $H^0$ by steps 2.1 and 2.2, the criterion [F3] gives $\omega_C\cong\mathcal O_C$. [F3, step 2.1, step 2.2]

4.1 (Canonical divisors are principal.) By step 3.1 $\omega_C$ is trivial, so a generator $\omega_0\in H^0(C,\omega_C)$, which exists because $h^0(C,\omega_C)=1$ by step 1.1, is a nowhere-vanishing global section; under an isomorphism $\omega_C\cong\mathcal O_C$ from step 3.1 it corresponds to a nonzero global section of $\mathcal O_C$, and the divisor of a nonzero global section of an invertible sheaf is effective of degree $\deg(\omega_C)=0$ by [F5], hence is the zero divisor because the only effective divisor of degree zero on $C$ is $0$; thus the canonical divisor $\operatorname{div}(\omega_0)=0$ is principal. Since by [F4] every canonical divisor is linearly equivalent to this one, every canonical divisor is the divisor of a rational function, that is, principal. [F4, F5, step 1.1, step 3.1]

5.1 Assertions: $\omega_C\cong\mathcal O_C$ is step 3.1, $h^0(C,\omega_C)=1$ is step 1.1 (in particular no rational point of $C$ was used anywhere), and the principality of all canonical divisors is step 4.1; the Axiom of Choice [F6] is used exactly through the duality suppliers cited above. [F6, step 1.1, step 3.1, step 4.1] ∎
