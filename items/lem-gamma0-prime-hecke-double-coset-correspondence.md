---
dependency_level: 1
id: lem-gamma0-prime-hecke-double-coset-correspondence
kind: lemma
title: "Prime Hecke double cosets for Gamma0(N)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-congruence-subgroup-of-sl2-z, def-dirichlet-character-modulo-q]
justified_by: []
sources:
  references:
    - title: "Knightly-Li, Kuznetsov trace formula, sections 4.2 and 7-9; local reconstruction with stated scope"
      url: https://arxiv.org/pdf/1202.0189v1
---

## Statement

Let $\Gamma=\Gamma_0(N)$, let $p\nmid N$ be prime, and put $\alpha=\operatorname{diag}(1,p)$. Then

$$H=\Gamma\cap\alpha^{-1}\Gamma\alpha=\{\gamma\in\Gamma:p\mid b_\gamma\},\qquad H'=\alpha H\alpha^{-1}=\Gamma_0(Np),\qquad [\Gamma:H]=[\Gamma:H']=p+1.$$

The double coset $\Gamma\alpha\Gamma$ has the following disjoint left-coset representatives:

$$\beta_b=\begin{pmatrix}1&b\\0&p\end{pmatrix}\quad(0\leq b<p),\qquad\beta_\infty=\begin{pmatrix}p&0\\0&1\end{pmatrix}.$$

For a unitary Dirichlet character $\chi$ modulo $N$, extend $\varepsilon(\gamma)=\chi(d_\gamma)$ to integral matrices of determinant coprime to $N$ with lower-left entry divisible by $N$, by the same rule. This extension is multiplicative, and $\varepsilon(\alpha h\alpha^{-1})=\varepsilon(h)$ on $H$. The weighted correspondence

$$S_\alpha u=\sum_{\beta\in\Gamma\backslash\Gamma\alpha\Gamma}\varepsilon(\beta)^{-1}u(\beta z)$$

is independent of the chosen representatives and transforms by $\chi(d_\gamma)$ when $u$ does. Its explicit normalization is

$$\frac{\chi(p)}{\sqrt p}S_\alpha u=p^{-1/2}\left(\sum_{b=0}^{p-1}u((z+b)/p)+\chi(p)u(pz)\right).$$

## Statement references

[[def-congruence-subgroup-of-sl2-z]]

[Knightly–Li, section 4.2](https://arxiv.org/pdf/1202.0189v1)

## Facts & Assumptions

**Given:** The group, prime and character in the Statement. Matrices of positive determinant act on the upper half-plane by fractional linear transformations; positive scalar multiples have the same action.

## Proof

1.1 For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, conjugation gives $\alpha\gamma\alpha^{-1}=\begin{pmatrix}a&b/p\\pc&d\end{pmatrix}$. It belongs to $\Gamma$ precisely when $p\mid b$. Conversely the conjugated subgroup consists of integral determinant-one matrices with $Np\mid c$, giving the formulas for $H,H'$. Reduction of $\Gamma$ modulo $p$ surjects onto $\mathrm{SL}_2(\mathbb F_p)$: the matrices $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and $\begin{pmatrix}1&0\\N&1\end{pmatrix}$ supply all upper and lower elementary matrices modulo $p$ by their powers, and Gaussian elimination shows these generate $\mathrm{SL}_2(\mathbb F_p)$. Upper- and lower-triangular subgroups each stabilize a line and have index $p+1$, since every nonzero vector in $\mathbb F_p^2$ spans one of exactly $(p^2-1)/(p-1)=p+1$ lines. Their inverse images are $H,H'$. [given, algebra, construct]

2.1 Each $\beta_b=\alpha\begin{pmatrix}1&b\\0&1\end{pmatrix}$ belongs to the double coset. Choose integers $b,d$ with $pd-Nb=1$. With $\gamma=\begin{pmatrix}p&b\\N&d\end{pmatrix}$ and $\delta=\begin{pmatrix}pd&-b\\-N&1\end{pmatrix}$, both matrices lie in $\Gamma$ and $\delta\alpha\gamma=\beta_\infty$. Two representatives $\beta_b,\beta_{b'}$ have the same left coset exactly when $(b-b')/p$ is integral; $\beta_\infty\beta_b^{-1}$ has lower-right entry $1/p$, so its coset is distinct. There are $p+1$ left cosets by step 1.1, hence these exhaust them. [step 1.1, construct, algebra]

3.1 The lower-right entry of a product of upper-triangular matrices modulo $N$ is the product of their lower-right entries. Each such entry is a unit because the determinant is coprime to $N$. This proves multiplicativity of $\varepsilon$; conjugation in step 1.1 leaves $d$ unchanged. Replacing $\beta$ by $\delta\beta$, $\delta\in\Gamma$, multiplies its coefficient by $\varepsilon(\delta)^{-1}$ and the function value by $\varepsilon(\delta)$, so the sum is unchanged. Right multiplication by any $\gamma\in\Gamma$ permutes left cosets: if $\beta_i\gamma=\delta_i\beta_j$, multiplicativity gives $\varepsilon(\beta_i)^{-1}\varepsilon(\delta_i)=\varepsilon(\gamma)\varepsilon(\beta_j)^{-1}$. This proves automorphy. Finally $\varepsilon(\beta_b)=\chi(p)$ and $\varepsilon(\beta_\infty)=1$, yielding the stated finite formula. [step 1.1, step 2.1, algebra] ∎ 