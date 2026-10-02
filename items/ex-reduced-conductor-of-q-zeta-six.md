---
id: ex-reduced-conductor-of-q-zeta-six
kind: example
title: The reduced conductor of Q(zeta_6)
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-conductor-of-a-full-cyclotomic-field
  - cor-cyclotomic-ramification-criterion
  - cor-unramified-prime-decomposition-in-a-cyclotomic-field
  - def-cyclotomic-extension
  - def-conductor-of-a-cyclotomic-field
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 6, Remark 6.6"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Remark 6.6(a), p. 100: if p divides n then p ramifies unless p = 2 and n = 2 times an odd number; the exclusion n = 6, p = 2 is the content of this example."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Ch. 11, Remark 11.7"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Remark 11.7, pp. 61-62: for odd n, -zeta_n is a primitive 2n-th root of unity and Q(zeta_{2n}) = Q(zeta_n), so the displayed index 6 is not intrinsic."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

$\mathbb Q(\zeta_6)=\mathbb Q(\zeta_3)$, the conductor of this field is $3$,
and the rational prime $2$ is unramified in it: $2\mathcal O_{\mathbb Q(\zeta_3)}$
is prime, with residue degree $2$.

## Facts & Assumptions

**Given:** A primitive sixth root of unity $\zeta_6$ and a primitive third root
of unity $\zeta_3$, with $\mathbb Q(\zeta_6)$ and $\mathbb Q(\zeta_3)$ the
corresponding cyclotomic fields ([[def-cyclotomic-extension]]).

[F1] For odd $m$, $-\zeta_m$ is a primitive $2m$-th root of unity, so
$\mathbb Q(\zeta_{2m})=\mathbb Q(\zeta_m)$
([[thm-conductor-of-a-full-cyclotomic-field]]).

[F2] The conductor of $\mathbb Q(\zeta_n)$ is $n$ when $n$ is odd or $4\mid n$
and is $n/2$ when $n\equiv2\pmod4$
([[thm-conductor-of-a-full-cyclotomic-field]],
[[def-conductor-of-a-cyclotomic-field]]).

[F3] Ramification criterion: for a cyclotomic field presented by its reduced
index $f$, a rational prime $\ell$ ramifies if and only if $\ell\mid f$
([[cor-cyclotomic-ramification-criterion]]).

[F4] Unramified decomposition: if $\ell\nmid f$ for the reduced index $f$ of
$\mathbb Q(\zeta_f)$, then every prime above $\ell$ has residue degree
$\operatorname{ord}_f(\ell)$ and there are $\varphi(f)/\operatorname{ord}_f(\ell)$
of them ([[cor-unramified-prime-decomposition-in-a-cyclotomic-field]]).

## Verification

**Proof technique:** direct.

1.1 Taking $m=3$ in [F1], $-\zeta_3$ is a primitive sixth root of unity, so $\mathbb Q(\zeta_6)=\mathbb Q(\zeta_3)$. [F1]

1.2 By [F2] with $n=6\equiv2\pmod4$, the conductor of $\mathbb Q(\zeta_6)$ is $6/2=3$. [F2]

2.1 The reduced index of this field is $3$, and $2\nmid3$, so [F3] shows that $2$ is unramified in $\mathbb Q(\zeta_6)=\mathbb Q(\zeta_3)$; by [F4] with $f=3$, $\ell=2$, the residue degree is $\operatorname{ord}_3(2)=2$ and the number of primes above $2$ is $\varphi(3)/2=1$, so $2\mathcal O$ is prime of degree $2$. [F3, F4, step 1.1, step 1.2] ∎

## Remarks

- **Why the displayed index $6$ is a trap.** The index $6$ is not reduced: an
  inference of the form "$\ell\mid(\text{displayed index})\Rightarrow\ell$
  ramifies" would wrongly make $2$ ramified, since $2\mid6$; the actual
  conductor is $3$, and $2\mid3$ fails. This is the exceptional shape
  excluded in the ramification criterion.
- **Frobenius viewpoint.** Since $\operatorname{ord}_3(2)=2$, the arithmetic
  Frobenius at $2$ acts by $\zeta_3\mapsto\zeta_3^{2}$ and has order $2$,
  matching the single degree-two prime above $2$.
