---
id: thm-canonical-height-is-quadratic-and-functorial
kind: theorem
title: Quadraticity, functoriality, and nonnegativity of the canonical height
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-neron-tate-canonical-height
  - thm-abelian-variety-is-projective
  - thm-weil-height-machine-functoriality-and-additivity
  - lem-neron-tate-height-limit-exists
  - lem-nonaffine-theorem-of-the-cube-for-abelian-variety
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§§10.1–10.3, especially the complete quadraticity and polarization arguments, pp. 93–103."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§8.4.4–8.4.5, canonical-height properties in the height-descent proof."
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K/\mathbb Q$ be a finite extension, let $A/K$ be a proper, smooth, geometrically connected group variety, and let $L$ be an invertible sheaf with $[-1]^*L\cong L$, where inversion is the group inverse. Assume $L$ is ample, meaning some positive tensor power defines a closed immersion into projective space. The Néron–Tate height $\widehat h_L:A(K)\to\mathbb R$, defined by $\widehat h_L(P)=\lim_{j\to\infty}4^{-j}h_L([2]^jP)$, is nonnegative and satisfies


$$
\widehat h_L(P+Q)+\widehat h_L(P-Q)=2\widehat h_L(P)+2\widehat h_L(Q).
$$


Consequently $B_L(P,Q):=\tfrac12(\widehat h_L(P+Q)-\widehat h_L(P)-\widehat h_L(Q))$ is a symmetric biadditive map with $\widehat h_L(P)=B_L(P,P)$. If $M$ is another symmetric invertible sheaf on $A$, canonical heights add under $L\otimes M$. For every $K$-homomorphism $f:A\to A'$ of abelian varieties and every symmetric invertible sheaf $N$ on $A'$, they satisfy $\widehat h_{f^*N}(P)=\widehat h_N(f(P))$.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-neron-tate-canonical-height|Néron–Tate height]]

[[def-abelian-variety-over-a-field|abelian variety]]

## Facts & Assumptions

**Given:** AC and DC; a number field $K$; abelian varieties $A/K$ and $A'/K$; a symmetric ample invertible sheaf $L$ on $A$; symmetric invertible sheaves $M$ on $A'$ and, where needed, on $A$; and a $K$-homomorphism $f:A\to A'$.

[A1] AC and DC are the stated axioms; AC is used by the projectivity, theorem-of-cube, and height-machine suppliers, and DC is used by the theorem-of-cube supplier ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] The theorem of the cube gives the displayed line-bundle identity on $A^3$ for every invertible sheaf ([[lem-nonaffine-theorem-of-the-cube-for-abelian-variety]]).

[F2] The height machine supplies functoriality under pullback and additivity under tensor product modulo bounded functions ([[thm-weil-height-machine-functoriality-and-additivity]]).

[F3] The defining limit exists, is independent of the chosen representative, and differs from it by a bounded function ([[lem-neron-tate-height-limit-exists]]).

[F4] The absolute logarithmic projective height is nonnegative ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]).

[F5] Every abelian variety over a field is projective under AC ([[thm-abelian-variety-is-projective]]).

## Proof

**Proof technique:** pull back the theorem of the cube to obtain the parallelogram identity up to bounded error, scale to eliminate the error, polarize, and use an ample projective embedding for nonnegativity.

1.1 Pull back [F1] along $A^2\to A^3,\ (P,Q)\mapsto(P,Q,-Q)$. The sum of all three coordinates is $P$, the pairwise sums are $P+Q,P-Q,0$, and symmetry gives the line-bundle identity $m_+^*L\otimes m_-^*L\cong p_1^*L^{\otimes2}\otimes p_2^*L^{\otimes2}$ up to a constant one-dimensional $K$-vector space, which is a trivial line bundle. [A1, F1, given, construct]

1.2 For symmetric invertible sheaves $L,M$, [F2] gives $h_{L\otimes M}=h_L+h_M+O(1)$. Evaluating at $2^jP$, dividing by $4^j$, and taking limits proves $\widehat h_{L\otimes M}(P)=\widehat h_L(P)+\widehat h_M(P)$. For $f:A\to A'$, [F2] gives $h_{f^*M}(P)=h_M(f(P))+O(1)$; since $f([2]^jP)=[2]^jf(P)$, scaling the bounded error by $4^{-j}$ proves $\widehat h_{f^*M}(P)=\widehat h_M(f(P))$. [F2, F3, algebra]

2.1 By [F5], $A$ is projective, so $A^2$ lies in the projective-scheme scope of [F2]. Applying the height machine to the line-bundle identity in step 1.1 gives a uniform $C\ge0$ such that $|h_L(P+Q)+h_L(P-Q)-2h_L(P)-2h_L(Q)|\le C$ for all $P,Q\in A(K)$. [A1, F2, F5, step 1.1]

3.1 Symmetry and [F2] make $h_L(-P)-h_L(P)$ bounded uniformly in $P$. By [F3], the limit is bounded distance from $h_L$, and its defining sequence is the one in step 2.1. [F2, F3, step 2.1]

4.1 Apply the bounded relation of step 2.1 to $2^jP,2^jQ$, divide it by $4^j$, and let $j\to\infty$. Each of the four terms converges by [F3], while $C/4^j\to0$; hence $\widehat h_L(P+Q)+\widehat h_L(P-Q)=2\widehat h_L(P)+2\widehat h_L(Q).$ Likewise step 3.1 applied to $2^jP$, divided by $4^j$, gives $\widehat h_L(-P)=\widehat h_L(P)$. [F3, step 2.1, step 3.1, algebra]

5.1 The limit formula gives $\widehat h_L(0)=\lim_j4^{-j}h_L(0)=0$. Setting $Q=P$ in step 4.1 therefore gives $\widehat h_L(2P)=4\widehat h_L(P)$. [F3, step 4.1, algebra]

6.1 Define $B_L$ as in the statement. It is symmetric because the group is commutative. From step 4.1, $B_L(x+y,z)+B_L(x-y,z)=2B_L(x,z)$ for all $x,y,z$. Indeed, twice the left side expands to $\widehat h_L(x+y+z)+\widehat h_L(x-y+z)-\widehat h_L(x+y)-\widehat h_L(x-y)-2\widehat h_L(z).$ By step 4.1 the first two terms sum to $2\widehat h_L(x+z)+2\widehat h_L(y)$, while $\widehat h_L(x+y)+\widehat h_L(x-y)=2\widehat h_L(x)+2\widehat h_L(y)$; the displayed expression is therefore $2\widehat h_L(x+z)-2\widehat h_L(x)-2\widehat h_L(z)=4B_L(x,z)$. Dividing by $2$ proves the identity, and taking $y=x$ gives $B_L(2x,z)=2B_L(x,z)$. [step 4.1, step 5.1, algebra]

7.1 In the identity of step 6.1 substitute $x=a+b$ and $y=a-b$. Its left side becomes $B_L(2a,z)+B_L(2b,z)$, hence $2B_L(a,z)+2B_L(b,z)$; its right side is $2B_L(a+b,z)$. Since the target is $\mathbb R$, division by $2$ proves additivity in the first variable, and symmetry proves additivity in the second. Also $B_L(x,x)=\tfrac12(\widehat h_L(2x)-2\widehat h_L(x))=\widehat h_L(x)$ by step 5.1. Thus $B_L$ is symmetric biadditive and represents $\widehat h_L$. [step 5.1, step 6.1, algebra]

8.1 Because $L$ is ample, some $r\ge1$ makes $L^{\otimes r}$ very ample; choose the resulting closed immersion $i:A\hookrightarrow\mathbb P^N_K$. By [F2] and [F4], $r h_L(P)=h_{\mathbb P^N}(i(P))+O(1)$, so $h_L$ is bounded below uniformly on $A(K)$. Every term $4^{-j}h_L([2]^jP)$ is therefore at least $-C4^{-j}$ for one constant $C$, and taking the limit supplied by [F3] gives $\widehat h_L(P)\ge0$. The required axiom uses were identified when deriving the bounded relations. [F2, F3, F4, step 2.1, step 4.1, algebra] ∎
