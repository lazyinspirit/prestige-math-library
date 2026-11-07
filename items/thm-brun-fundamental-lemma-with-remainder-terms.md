---
id: thm-brun-fundamental-lemma-with-remainder-terms
kind: theorem
title: "Brun fundamental lemma with remainder terms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - thm-linear-sieve-fundamental-lemma
justified_by: []
proof_strategy: direct
axiom_use: Finite arithmetic, finite nonnegative weighted sums and real scaling; no choice hypothesis.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf"
      locator: "§5, Theorems 5.1–5.4, printed pp. 15–18."
    - title: "Andrew Granville and K. Soundararajan, Multiplicative Number Theory: The Pretentious Approach"
      url: "https://dms.umontreal.ca/~andrew/PDF/Book.To2.5.pdf"
      locator: "§1.4.2, Theorem 1.4.2: self-contained interval-in-progression sieve estimate; this is not the arbitrary-sequence remainder theorem above."
---

## Statement

Let 𝒜 be a finite set of integers, 𝒫 a set of primes, P(y)=∏_{p∈𝒫,p≤y}p, A_d=#{a∈𝒜:a≡0 mod d}, and S(𝒜,𝒫,y)=#{a∈𝒜:gcd(a,P(y))=1}. Suppose A_d=Xw(d)/d+R_d for every d|P(y), where w is nonnegative and multiplicative, w(1)=1, 0≤w(p)<p for each sieving prime, X∈ℝ, and κ,A>0. If ∏_{η≤p≤ξ,p∈𝒫}(1−w(p)/p)⁻¹ < (log ξ/log η)^κ(1+A/log η) for all 2≤η≤ξ, then uniformly for y≥2 and u≥1, S(𝒜,𝒫,y)=X∏_{p≤y,p∈𝒫}(1−w(p)/p)(1+O(u^(−u/2)))+O(Σ_{d≤yᵘ,d|P(y)}|R_d|), with constants depending only on κ,A.

## Statement references

[Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits, §5, Theorems 5.1–5.4, printed pp. 15–18.](https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf)

[Andrew Granville and K. Soundararajan, Multiplicative Number Theory: The Pretentious Approach, §1.4.2, Theorem 1.4.2: self-contained interval-in-progression sieve estimate; this is not the arbitrary-sequence remainder theorem above.](https://dms.umontreal.ca/~andrew/PDF/Book.To2.5.pdf)
## Facts & Assumptions

**Given:** The complete data and hypotheses in the Statement. Put $\mathcal Q=\{p\in\mathcal P:p\le y\}$, $P=\prod_{p\in\mathcal Q}p$, $g(d)=w(d)/d$, $V=\prod_{p\in\mathcal Q}(1-g(p))$, $D=y^u$, and $R=\sum_{d\mid P,d\le D}|R_d|$. All these products and sums are finite and $0<V\le1$.

[F1] [[thm-linear-sieve-fundamental-lemma]] proves the following finite weighted-sequence estimate: for a finite nonempty prime set $\mathcal Q$ with maximum $z\ge2$, nonnegative weights supported on positive integers up to some $x\ge3$, a scale $X'>1$, and local data $A'_d=X'g(d)+r'_d$, if
$\prod_{p\in\mathcal Q\cap(v,t]}(1-g(p))^{-1}\le(1+C/\log v)(\log t/\log v)^\kappa$
for $3/2\le v\le t\le z$, then at every $D=z^s$, $s\ge1$, its sifted sum is
$X'V+O_{\kappa,C}(s^{-s/2}X'V+\sum_{d\mid P,d\le D}|r'_d|)$.
Only this first conclusion is used, not its further quantitative lower-bound assertion.

## Proof

1.1 If $\mathcal Q$ is empty, then $P=1$, $V=1$, and $S=|\mathcal A|=A_1=X+R_1$, so the conclusion holds. Suppose henceforth that $\mathcal Q$ is nonempty, and put $z=\max\mathcal Q\le y$ and $C=\max\{1,A\}$. We verify precisely the endpoint convention of [F1]. When $2\le v\le t\le z$, the primes of $\mathcal Q\cap(v,t]$ form a subset of the primes of $\mathcal P\cap[v,t]$; every inverse Euler factor is at least one, so the Given bound implies the bound in [F1]. When $3/2\le v<2\le t\le z$, the Given bound at $(\eta,\xi)=(2,t)$ bounds the entire product by $(1+A/\log2)(\log t/\log2)^\kappa\le(1+C/\log v)(\log t/\log v)^\kappa$. If $t<2$ the product is empty and the same bound is immediate. Thus the full local-product hypothesis of [F1], including the prime $2$, holds with a constant depending only on $A$. [given, F1, algebra]

1.2 First dispose of $X\le0$. Since $A_1=|\mathcal A|=X+R_1\ge0$, one has $R_1\ge|X|$, and $0\le S\le A_1\le R_1$. Consequently $|S-XV|=S+|X|V\le2R_1\le2R$, which is stronger than the required estimate. This also covers $X=0$; no positivity of an otherwise arbitrary scale has been silently assumed. [given, algebra]

2.1 Now let $X>0$. Choose the explicit positive real number $c=1+2/X$, so $X'=cX>1$. Choose an integer $K\ge0$ large enough that every member of $\mathcal A+KP$ is positive, and choose an integer $x\ge3$ containing that finite translated set in $[1,x]$. Give each translated integer weight $c$ and all other integers weight zero. Translation by $KP$ preserves divisibility by every $d\mid P$ and preserves coprimality to $P$. The resulting weighted local and sifted sums are therefore $A'_d=cA_d=X'g(d)+cR_d$ and $S'=cS$. The weights are nonnegative, so all the finite-sequence hypotheses of [F1] are satisfied by step 1.1. Put $s=\log D/\log z=u\log y/\log z\ge u\ge1$; then $z^s=D$, so [F1] gives $$cS=cXV+O_{\kappa,A}\left(s^{-s/2}cXV+cR\right).$$ Dividing by $c>0$ yields the corresponding estimate for the original finite set, including sets containing zero or negative integers. [given, F1, step 1.1, algebra, construct]

3.1 The function $t^{-t/2}$ decreases for $t\ge1$, since the derivative of its logarithm is $-(1+\log t)/2<0$. Hence $s^{-s/2}\le u^{-u/2}$ in step 2.1, and $$S=XV+O_{\kappa,A}\left(u^{-u/2}XV+R\right).$$ Together with steps 1.1 and 1.2 this proves the full Statement for every real $X$, every $y\ge2$, and every $u\ge1$, with constants depending only on $\kappa,A$. For negative $X$ the additive form of the multiplicative error is read with its usual absolute magnitude; step 1.2 has already absorbed that case into the displayed remainder term. [given, step 1.1, step 1.2, step 2.1, algebra] ∎ 

## Source notes

The proof is a local application of the existing locally proved finite-weight fundamental lemma [F1]. The endpoint conversion, finite integer translation, scale normalization, empty sieve and nonpositive-scale cases are proved above. No external sieve theorem or finite computation is imported. The Bourgain–Lindenstrauss and Granville–Soundararajan references retain their stated bibliographic roles; this repair makes no additional claim about reading their full texts.
