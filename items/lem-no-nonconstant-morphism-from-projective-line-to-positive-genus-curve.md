---
id: lem-no-nonconstant-morphism-from-projective-line-to-positive-genus-curve
kind: lemma
title: No nonconstant morphism from the projective line to a positive-genus curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-perfect-field
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - lem-projective-line-curve-and-divisor-basics
  - thm-curves-function-fields-equivalence
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - thm-perfect-field-characterizations
  - thm-riemann-hurwitz-complete
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves, Lemma 53.12.2 (tag 0C1D)"
      url: https://stacks.math.columbia.edu/tag/0C1D
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV), §53.12"
      url: https://stacks.math.columbia.edu/download/curves.pdf
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $k$ be a perfect field and let $C/k$ be a
smooth, proper, geometrically integral curve of genus $g(C)\ge1$. Every
$k$-morphism $\mathbb P^1_k\to C$ is constant.

## Statement references

[[def-projective-line-two-affine-cover-and-twisting-sheaf]]

[[lem-projective-line-curve-and-divisor-basics]]

[[def-perfect-field]]

[[def-algebraic-curve-over-field]]

## Facts & Assumptions

**Given:** AC, a perfect field $k$, a smooth proper geometrically integral curve
$C/k$ with $g(C)\ge1$, and a $k$-morphism $f:\mathbb P^1_k\to C$.

[A1] The Axiom of Choice: every family of nonempty sets has a choice function.
[[def-axiom-of-choice]]

[F1] The projective line is a smooth proper geometrically integral curve with
function field $k(t)$ and genus zero; the genus is $\dim_k H^1(\mathcal O)$.
[[def-projective-line-two-affine-cover-and-twisting-sheaf]]
[[lem-projective-line-curve-and-divisor-basics]]

[F2] For smooth proper geometrically integral curves over $k$, an injective
$k$-algebra map of function fields in the reverse direction is induced by a
unique dominant $k$-morphism. In particular, such an inclusion with source
function field $k(t)$ gives a morphism from a projective line.
[[thm-curves-function-fields-equivalence]]

[F3] A nonconstant morphism between proper integral curves is finite and
surjective and induces a finite extension of function fields.
[[thm-nonconstant-morphism-proper-curves-finite-surjective]]

[F4] A field is perfect exactly when it has characteristic zero or, in
characteristic $p>0$, its Frobenius map $a\mapsto a^p$ is surjective.
[[def-perfect-field]]
[[thm-perfect-field-characterizations]]

[F5] For a finite separable morphism $h:S\to T$ of smooth proper
geometrically integral curves, with degree $d$ and effective different divisor
$R_h$, the Riemann–Hurwitz identity is
$2g(S)-2=d(2g(T)-2)+\deg(R_h)$, and $\deg(R_h)\ge0$.
[[thm-riemann-hurwitz-complete]]

## Axiom use

AC is assumed through the projective-line curve, function-field/morphism,
finite-morphism and Riemann–Hurwitz suppliers [F1], [F2], [F3] and [F5]. The
valuation-order, Frobenius and derivative arguments in steps 2.1–3.1 make no
additional choices.

## Proof

**Proof technique:** direct; reduce any inseparable map to a separable map from
a Frobenius twist of the projective line, then apply Riemann–Hurwitz.

1.1 If $f$ were nonconstant, [F3] would make it finite and surjective and its pullback would embed $L:=k(C)$ into $E:=k(t)$ with $E/L$ finite. If $\operatorname{char}k=0$, then $E/L$ is separable by [F4], so [F5] gives $$-2=2g(\mathbb P^1_k)-2=[E:L](2g(C)-2)+\deg(R_f)\ge0,$$ contradiction to $g(C)\ge1$. [A1, F1, F3, F4, F5, given]

2.1 Suppose $\operatorname{char}k=p>0$. Put $E_r=k(t^{p^r})$ for $r\ge0$. Since $k$ is perfect, $E_r=E^{p^r}$. A nonconstant rational function $u=A(t)/B(t)$ in lowest terms has a pole: a nonconstant denominator gives a pole at one of its irreducible factors, and a nonconstant numerator with constant denominator has a pole at infinity. If $u\in E_r$, perfectness writes $u=v^{p^r}$ for $v\in E$, so each of its zero and pole orders is divisible by $p^r$. Choosing $p^r$ larger than a fixed nonzero pole order shows $\bigcap_{r\ge0}E_r=k$. Since $L$ contains a nonconstant function, the set of $r$ with $L\subseteq E_r$ is finite and contains $0$; let $e$ be its maximum. Write $E_e=k(z)$ with $z=t^{p^e}$. The inclusion $L\hookrightarrow E_e$ gives by [F2] a dominant morphism $h:\mathbb P^1_k\to C$. The inclusion $E_e\hookrightarrow E$ is the pullback of the relative Frobenius $F^e:\mathbb P^1_k\to\mathbb P^{1,(p^e)}_k$ after identifying the twist with the projective line; uniqueness in [F2] gives $f=h\circ F^e$. [A1, F1, F2, given, step 1.1, construct]

3.1 By maximality of $e$, $L\not\subseteq E_e^p=E_{e+1}$. Choose $u=A(z)/B(z)\in L\setminus E_e^p$ with coprime $A,B\in k[z]$ and $B\ne0$. Since $k$ is perfect, $E_e^p=k(z^p)$. The element $z^p$ has order one at zero in $k(z^p)$, so it is not a $p$-th power there; hence $z\notin k(z^p)$. Since $z^p\in k(z^p)$, the degree $[k(z):k(z^p)]$ divides $p$ and is not $1$, so it is $p$. Therefore $1,z,\ldots,z^{p-1}$ is a basis over $k(z^p)$. If $v=\sum_{i=0}^{p-1}a_i z^i$ with $a_i\in k(z^p)$, then $$\frac{dv}{dz}=\sum_{i=1}^{p-1}i a_i z^{i-1};$$ the basis independence and $i\ne0$ in $k$ for $1\le i<p$ show that the kernel of $d/dz:k(z)\to k(z)$ is exactly $E_e^p$. Thus $du/dz\ne0$. The nonzero polynomial $P(T)=A(T)-uB(T)\in k(u)[T]$ has root $z$ and $$P'(z)=A'(z)-uB'(z)=B(z)\,\frac{du}{dz}\ne0.$$ If $m(T)$ is the minimal polynomial of $z$ over $k(u)$, write $P=mQ$; then $P'(z)=m'(z)Q(z)$, so $m'(z)\ne0$ and $E_e/k(u)$ is finite separable: irreducibility of $m$ gives $\gcd(m,m')=1$, and this remains coprime after extending coefficients to $E_e$. Since $k(u)\subseteq L\subseteq E_e$, the minimal polynomial of $z$ over $L$ divides $m$ in $L[T]$; as a factor of a squarefree polynomial it is separable. Thus $E_e/L$ is finite separable and $h$ is separable. [F2, F3, F4, algebra, step 2.1]

4.1 Apply [F5] to $h$. Since its source is the genus-zero projective line, its target has genus at least one, its degree is positive, and its different is effective, Riemann–Hurwitz again gives $-2\ge0$, a contradiction. Hence the original map $f$ is constant. [A1, F1, F3, F5, step 3.1] ∎

## Diagram

In positive characteristic, $\mathbb P^{1,(p^e)}_k$ denotes the base change
of $\mathbb P^1_k$ along the $e$-fold Frobenius automorphism of the perfect
field $k$; it is again a projective line. The lower route is the factorization
established in step 2.1: relative Frobenius is purely inseparable, while the
residual map is separable by step 3.1. The proof above uses function fields
and Riemann–Hurwitz, not the diagram.

```tikzcd
\mathbb P^1_k \arrow[r,"F^e"] \arrow[dr,"f"'] & \mathbb P^{1,(p^e)}_k \arrow[d,"h"] \\
& C
```
