---
id: lem-hensel-factor-lift-uniqueness-induction
kind: lemma
title: "Two lifted factorisations agree modulo every ideal power"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-coprime-factor-bezout-lift]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Chapter 22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $A$ be a commutative ring, let $I \subseteq A$ be an ideal, let
$f \in A[T]$, and let
$$f=gh=g'h'$$
with $g,h,g',h'$ monic, $\overline g=\overline{g'}$, $\overline h=\overline{h'}$,
with $g,g'$ of the same degree $m$ and $h,h'$ of the same degree $n$, and with
$\overline g,\overline h$ coprime in $(A/I)[T]$. Then
$$g \equiv g' \pmod{I^r[T]} \quad \text{and} \quad h \equiv h' \pmod{I^r[T]}$$
for every $r \ge 1$.

## Facts & Assumptions

**Given:** Two monic lifts $f=gh=g'h'$ of the same coprime residue
factorization.

[L1] Coprime residue factors admit a lifted Bezout identity modulo $I$
([[lem-coprime-factor-bezout-lift]]).

## Proof

**Proof technique:** improve congruence one power at a time.

1.1 The congruences modulo $I$ hold by hypothesis, so the claim is true for $r=1$. [given]

2.1 Assume $g \equiv g' \pmod{I^r[T]}$ and $h \equiv h' \pmod{I^r[T]}$ for some $r \ge 1$. Write $g'=g+u$ and $h'=h+v$ with $u,v \in I^r[T]$. Since each pair consists of monic polynomials of the same degree, $\deg u<m$ and $\deg v<n$. From $gh=(g+u)(h+v)$ we get $$uh+vg+uv=0.$$ Modulo $I^{r+1}$ the term $uv$ vanishes, so $$uh+vg \equiv 0 \pmod{I^{r+1}}.$$ [step 1.1, given, assume-hyp, algebra]

3.1 Put $M=I^r/I^{r+1}$, and let $\bar u,\bar v\in M[T]$ be the classes of $u,v$. Step 2.1 gives $\bar u h+\bar v g=0$. Choose $a,b$ with $ag+bh\equiv1\pmod I$ by [L1]. Modulo the monic polynomial $g$, multiplication by $h$ is invertible with inverse $b$, so $\bar u h=0$ implies $\bar u=0$ modulo $g$. Since $\deg\bar u<m=\deg g$, this gives $\bar u=0$. The equation then becomes $\bar v g=0$, and multiplication by the monic polynomial $g$ is injective on $M[T]$, so $\bar v=0$. Hence $u,v\in I^{r+1}[T]$, proving the two congruences modulo $I^{r+1}$. [L1, step 2.1, algebra, discharge-induction]

4.1 By induction, the two lifted factorisations agree modulo every power $I^r$. [step 1.1, step 3.1] ∎
