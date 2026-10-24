---
id: lem-polynomial-quantum-highest-vectors-satisfy-all-divided-power-relations
kind: lemma
title: "Polynomial quantum highest vectors satisfy every divided-power highest relation"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [lem-integral-divided-power-tensor-action-surjects-onto-type-a-q-schur-algebra, lem-divided-power-and-toral-quantum-binomial-reordering-identities, lem-quantum-pascal-recurrence-and-gaussian-integrality]
justified_by: []
aliases: []
landmark: false
dependency_level: 14
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Jonathan Brundan, Modular branching rules and the Mullineux map for Hecke algebras of type A"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
      locator: "Sections 3.14–3.16, printed pp. 14–15: polynomial modules and highest universality. The proof below supplies all divided highest relations directly from nonnegative label support by a Laurent-polynomial Gaussian recurrence; no codeterminant induction theorem is imported."
---

## Statement

Put $A=\mathbb Z[v,v^{-1}]$, and use the integral $U_A(\mathfrak{gl}_N)$ of [[lem-integral-divided-power-tensor-action-surjects-onto-type-a-q-schur-algebra]]. Let $R$ be any commutative $A$-algebra and $U_R=R\otimes_AU_A$. Let $X$ be a left $U_R$-module with a specified composition-label decomposition
$$X=\bigoplus_{\mu\in\Lambda(N,r)}X_\mu,$$
where $r\ge0$, $\Lambda(N,r)$ consists of nonnegative integer $N$-tuples of total $r$, every integral toral element acts on $X_\mu$ by its integer-weight character $\mu$, and the positive and negative divided powers shift labels by their root degrees. Thus the toral rank-one binomial with indices $c,t$ acts by $\left[\begin{smallmatrix}\mu_i-\mu_{i+1}+c\\t\end{smallmatrix}\right]_v$. This requirement uses the full integral toral characters, including specialized binomials; it does not recover labels from the specialized $K_j$ eigenvalues. Each $X_\mu$ may be an arbitrary $R$-module.

For a partition $\lambda\in\Lambda(N,r)$ and a vector $x\in X_\lambda$ killed by every $E_i^{(s)}$, $s>0$, put $m_i=\lambda_i-\lambda_{i+1}$. Then
$$F_i^{(a)}x=0\qquad(1\le i<N,\ a>m_i).$$
These are all divided powers beyond the highest bound, including those whose quantum factorial vanishes after specialization. Consequently, if $X=U_Rx$, the highest-vector map gives a surjection of negative-half modules
$$U_R^-/\sum_{i=1}^{N-1}\sum_{a>m_i}U_R^-F_i^{(a)}\longrightarrow X,\qquad 1\longmapsto x.$$
Whenever this quotient carries its integral highest-module action, with the same toral character and positive annihilation on $1$, that map is a $U_R$-module map. In particular it applies to the actual highest quotient used by the normalized q-Schur Weyl-cell comparison. No Schur factorization of $X$ is assumed. The relation proof and negative-half surjection are choice-free and hold at every specialization, over rings with torsion and zero divisors as well as fields.

## Facts & Assumptions

**Given:** The rings, the integral quantum algebra, the specified nonnegative composition-label decomposition, and the highest vector in the Statement.

[F1] The integral rank-one reordering identity and triangular spanning hold after every base change ([[lem-divided-power-and-toral-quantum-binomial-reordering-identities]]). On a highest vector of simple-coroot weight $m$, reordering and the integer toral character give $E_i^{(s)}F_i^{(b)}x=\left[\begin{smallmatrix}m+s-b\\s\end{smallmatrix}\right]_v F_i^{(b-s)}x$ for $b\ge s$.

[F2] The symmetric nonnegative quantum binomials are Laurent polynomials, are symmetric in their lower complementary indices, and satisfy both quantum Pascal recurrences ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

## Proof

1.1 Extend the symmetric binomial to integer top indices using its finite product in the generic variable. If $d\ge1$ and $s\ge0$, negating every numerator quantum integer gives $\left[\begin{smallmatrix}-d\\s\end{smallmatrix}\right]_v=(-1)^s\left[\begin{smallmatrix}d+s-1\\s\end{smallmatrix}\right]_v$. The right side is a Laurent polynomial by [F2], so this equality defines its integral specialization without dividing a specialized factorial. Put $g_d(s)=\left[\begin{smallmatrix}d+s-1\\d-1\end{smallmatrix}\right]_v$; symmetry makes the negative binomial $(-1)^sg_d(s)$, and $g_d(0)=1$. [given, F2, algebra, construct]

2.1 Establish an exact recurrence for this sequence. For an indeterminate $Q$, let $G_{n,k}(Q)$ be the ordinary Gaussian polynomial, characterized by $G_{n,k}(v^2)=v^{k(n-k)}\left[\begin{smallmatrix}n\\k\end{smallmatrix}\right]_v$. Both Pascal recurrences in [F2] give $G_{n,k}=G_{n-1,k-1}+Q^kG_{n-1,k}$, with out-of-range terms zero. Put $h_d(s)=G_{d+s-1,d-1}$ and $h_d(-1)=0$. Thus $h_1(s)=1$ and $h_{d+1}(s)=h_d(s)+Q^dh_{d+1}(s-1)$ for $s\ge0$. Multiplying formal series coefficientwise yields $\sum_{s\ge0}h_d(s)t^s=\prod_{j=0}^{d-1}(1-Q^jt)^{-1}$ by induction on $d$. Each inverse here is the formal geometric series, so no coefficient-ring element is divided. Substitution $Q=v^2$ and $t\mapsto v^{-(d-1)}t$ gives $$\sum_{s\ge0}g_d(s)t^s=\prod_{j=0}^{d-1}(1-v^{2j-d+1}t)^{-1}.$$ Writing the denominator as $\sum_{j=0}^dp_jt^j$, its constant term is $p_0=1$ and its top coefficient is $p_d=(-1)^dv^{\sum_{j=0}^{d-1}(2j-d+1)}=(-1)^d$. Coefficient comparison therefore gives $\sum_{j=0}^dp_jg_d(n-j)=0$ for every $n\ge d$, with a unit coefficient on the oldest term. [F2, step 1.1, algebra, construct]

3.1 A zero tail forces a zero initial coefficient over every ring. More precisely, if $z$ belongs to any $R$-module and $g_d(s)z=0$ for every $s\ge S$, first use the recurrence of step 2.1 at $n=S+d-1$ to obtain $p_dg_d(S-1)z=0$ when $S>0$. The other $d$ terms have indices at least $S$ and are zero. Since $p_d=(-1)^d$ is a unit, $g_d(S-1)z=0$. Repeat this finite backward argument until $g_d(0)z=z=0$. If $S=0$ the conclusion already follows from $g_d(0)=1$. This argument never divides a quantum integer or assumes that a nonzero scalar acts injectively. [step 1.1, step 2.1, algebra]

4.1 Fix $i$ and $a>m_i$, put $d=a-m_i>0$ and $z=F_i^{(a)}x$. The only surviving term of the rank-one reordering of $E_i^{(s)}F_i^{(a+s)}x$ has contraction index $s$, since every other term ends in a positive divided power killing $x$. Its toral factor acts on $x$ by $\left[\begin{smallmatrix}m_i-a\\s\end{smallmatrix}\right]_v$, so [F1] and step 1.1 give $$E_i^{(s)}F_i^{(a+s)}x=(-1)^sg_d(s)z.$$ For all $s\ge S:=\max(0,\lambda_i-a+1)$, the putative composition label of $F_i^{(a+s)}x$ has $i$th coordinate $\lambda_i-a-s<0$, hence this vector is zero by the given support. Thus $g_d(s)z=0$ for every $s\ge S$. Step 3.1 proves $F_i^{(a)}x=z=0$. This establishes every required divided relation independently, including $a$ larger than the characteristic or quantum characteristic. [given, F1, step 1.1, step 3.1, algebra]

5.1 If $X=U_Rx$, triangular spanning in [F1] and the highest conditions give $X=U_R^-x$: positive nonconstant terms kill $x$ and the middle toral terms evaluate by its character. The negative-half map $y\mapsto yx$ is onto, and step 4.1 makes each generator $F_i^{(a)}$, $a>m_i$, of the displayed left ideal vanish at $x$. It therefore factors through exactly the stated negative quotient. This is a concrete quotient construction over $R$, rather than a specialization of a generic surjectivity claim. [F1, step 4.1, construct, algebra]

6.1 Suppose the quotient is supplied with the highest-module action described in the Statement. The map of step 5.1 commutes with negative divided powers by construction and with all toral elements by homogeneous degrees and the integer-weight characters. For a positive divided generator acting on a negative word, apply the same finite integral reordering identity in the quotient and in $X$; move the toral coefficients to the highest line and kill the positive tails. Each resulting negative term has the same coefficient and the same image in the two modules. Linearity proves commutation with every positive divided generator, hence with all of $U_R$. Any such map is determined by its highest vector because the quotient is generated by the negative words. At $N=1$ there are no simple-root relations and the same argument gives the rank-one cyclic quotient directly; the zero module and $r=0$ are included. All scalar operations in the relation proof were Laurent-polynomial identities and multiplication by the units $(-1)^d$, so no flatness or Choice hypothesis is required. [given, F1, step 5.1, algebra] ∎
