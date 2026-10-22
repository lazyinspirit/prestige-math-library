---
id: thm-qsmx-regular-bethe-eigenpair
kind: theorem
title: Regular Bethe data give transfer-family eigenpairs
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsmx-rational-monodromy
  - def-qsmx-regular-bethe-data
  - lem-qsmx-monodromy-rtt
dependency_roles:
  def-qsmx-rational-monodromy: mathematical-premise
  def-qsmx-regular-bethe-data: mathematical-premise
  lem-qsmx-monodromy-rtt: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 4, PDF pp. 10–14, equations (66)–(97): RTT exchange relations, wanted/unwanted terms, and transfer eigenvalue."
    - title: "Classical and Quantum Integrable Systems, Lecture 15: The algebraic Bethe ansatz"
      url: "https://vu-ff.github.io/integrability/en/lectures/15/"
      locator: "Sections 15.3–15.6, Lemma 15.5, Proposition 15.6, Lemma 15.8 and Theorem 15.7: reference state, exchange relations and eigenvalue formula."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $V_N=(\mathbb C^2)^{\otimes N}$, $N\ge3$, with auxiliary copy
$V_a=\mathbb C^2$, $R_{aj}(u)=uI+iP_{aj}$, where $P_{aj}$ swaps the auxiliary
factor with site $j$, and
$L_{aj}(u)=R_{aj}(u-i/2)$. Define
$T_a^L(u)=L_{aN}(u)\cdots L_{a1}(u)$,
$\tau(u)=\operatorname{tr}_aT_a^L(u)$, and the auxiliary entries
$T_a^L(u)=\begin{pmatrix}A(u)&B(u)\\C(u)&D(u)\end{pmatrix}_a$ in the ordered
basis $e_\uparrow,e_\downarrow$. Put $\Omega=e_\uparrow^{\otimes N}$. Suppose
finite roots $\lambda_1,\ldots,\lambda_M$, $0\le M\le N$, are pairwise
distinct, avoid $\pm i/2$, have no pairwise difference equal to $\pm i$,
satisfy
$$\left(\frac{\lambda_j+i/2}{\lambda_j-i/2}\right)^N =\prod_{k\ne j}\frac{\lambda_j-\lambda_k+i}{\lambda_j-\lambda_k-i} \quad(1\le j\le M),$$
and give the nonzero vector $\Psi=\prod_{j=1}^M B(\lambda_j)\Omega$. For
$u\notin\{\lambda_1,\ldots,\lambda_M\}$ its eigenvalue is
$$\Lambda(u)=(u+i/2)^N\prod_{j=1}^M\frac{u-\lambda_j-i}{u-\lambda_j} +(u-i/2)^N\prod_{j=1}^M\frac{u-\lambda_j+i}{u-\lambda_j}.$$
The apparent poles cancel, so $\Lambda$ extends to a polynomial and the
eigenvector identity holds for every $u\in\mathbb C$. This result asserts no
converse, singular-root regularization, descendant construction, or completeness.

## Statement references

[[def-qsmx-regular-bethe-data]]

[Faddeev, §4, equations (88)–(97)](https://arxiv.org/pdf/hep-th/9605187)

[Classical and Quantum Integrable Systems, Lecture 15, §§15.5–15.8](https://vu-ff.github.io/integrability/en/lectures/15/)

## Facts & Assumptions

**Given:** $N\ge3$, $0\le M\le N$, finite pairwise distinct roots $\lambda_1,\ldots,\lambda_M$ satisfying the displayed exclusions and Bethe equations, and the associated vector $\Psi\ne0$.

[F1] [[def-qsmx-rational-monodromy]]: $R_{aj}(u)=uI+iP_{aj}$ and the ordered monodromy is the product $R_{aN}(u)\cdots R_{a1}(u)$.

[F2] [[def-qsmx-regular-bethe-data]]: $L_{aj}(u)=R_{aj}(u-i/2)$, $T_a^L(u)=L_{aN}(u)\cdots L_{a1}(u)$ has auxiliary entries $A,B,C,D$, $\Omega=e_\uparrow^{\otimes N}$, the roots are regular and pairwise distinct, their Bethe equations hold, and $\Psi=\prod_jB(\lambda_j)\Omega\ne0$.

[F3] [[lem-qsmx-monodromy-rtt]]: for all $x,y\in\mathbb C$, $R_{ab}(x-y)T_a(x)T_b(y)=T_b(y)T_a(x)R_{ab}(x-y)$.

## Proof


1.1 Apply [F3] at $x=u-i/2$ and $y=v-i/2$. Since the two shifts cancel in
$x-y$, the shifted monodromies obey
$$R_{ab}(u-v)T_a^L(u)T_b^L(v)=T_b^L(v)T_a^L(u)R_{ab}(u-v).$$
All operators act on finite-dimensional auxiliary and chain tensor factors.
[given, F1, F3, algebra]

1.2 On a single site with the site vector $e_\uparrow$, direct application of
$L_{aj}(u)=(u-i/2)I+iP_{aj}$ gives the auxiliary matrix
$$L_{aj}(u)e_\uparrow= \begin{pmatrix}(u+i/2)e_\uparrow&i e_\downarrow\\ 0&(u-i/2)e_\uparrow\end{pmatrix}_a.$$
It is upper triangular; multiplying these local matrices in the prescribed
site order keeps the product upper triangular on
$\Omega=e_\uparrow^{\otimes N}$. Its diagonal entries multiply, so
$$C(u)\Omega=0,\qquad A(u)\Omega=a(u)\Omega,\qquad D(u)\Omega=d(u)\Omega, \quad a(u)=(u+i/2)^N,\quad d(u)=(u-i/2)^N.$$
[given, F1, F2, algebra]

2.1 In the ordered auxiliary basis
$|\uparrow\uparrow\rangle,|\uparrow\downarrow\rangle,
|\downarrow\uparrow\rangle,|\downarrow\downarrow\rangle$,
$R_{ab}(x)$ has diagonal entries $x+i,x,x,x+i$ and the two off-diagonal
middle entries $i$. Comparing the row $|\uparrow\uparrow\rangle$ and column
$|\downarrow\uparrow\rangle$ entries in step 1.1 gives
$$(x+i)B(u)A(v)=iB(v)A(u)+xA(v)B(u),\qquad x=u-v.$$
Exchange $u,v$ and solve for $A(u)B(v)$ to obtain
$A(u)B(v)=f(x)B(v)A(u)+g(x)B(u)A(v)$ for $x\ne0$, where
$f(x):=(x-i)/x$ and $g(x):=i/x$. The row $|\uparrow\uparrow\rangle$,
column $|\downarrow\downarrow\rangle$ entry gives
$(x+i)B(u)B(v)=(x+i)B(v)B(u)$, hence the $B$ operators commute for $x\ne-i$;
both sides are polynomial matrices, so this holds also at $x=-i$. The row
$|\downarrow\uparrow\rangle$, column $|\downarrow\downarrow\rangle$ entry
gives $xD(u)B(v)+iB(u)D(v)=(x+i)B(v)D(u)$. Thus for $x\ne0$,
$D(u)B(v)=h(x)B(v)D(u)+k(x)B(u)D(v)$, where
$h(x):=(x+i)/x$ and $k(x):=-i/x$. [given, F1, F2, step 1.1, algebra]

3.1 For pairwise distinct parameters $v_1,\ldots,v_M$ and a variable $u$
distinct from them, the exchange relations of step 2.1 imply
$$\begin{aligned} A(u)\prod_{k=1}^M B(v_k)\Omega ={}&a(u)\prod_{k=1}^M f(u-v_k)\prod_{k=1}^M B(v_k)\Omega\\ &+\sum_{j=1}^M a(v_j)g(u-v_j) \prod_{k\ne j}f(v_j-v_k)\,B(u)\prod_{k\ne j}B(v_k)\Omega,\\ D(u)\prod_{k=1}^M B(v_k)\Omega ={}&d(u)\prod_{k=1}^M h(u-v_k)\prod_{k=1}^M B(v_k)\Omega\\ &+\sum_{j=1}^M d(v_j)k(u-v_j) \prod_{k\ne j}h(v_j-v_k)\,B(u)\prod_{k\ne j}B(v_k)\Omega. \end{aligned}$$
For $M=0$ these follow from step 1.2. Suppose they hold for $M-1$ and move
$A(u)$ past the first factor $B(v_1)$ using step 2.1, then apply the induction
formulas to the remaining $M-1$ factors. The unwanted coefficient for a fixed
$j\ge2$ is the common factor
$a(v_j)\prod_{k\ne1,j}f(v_j-v_k)$ times
$f(x)g(y)+g(x)g(y-x)$, with $x=u-v_1$ and $y=u-v_j$. Direct substitution
of $f(z)=(z-i)/z$ and $g(z)=i/z$ gives
$f(x)g(y)+g(x)g(y-x)=g(y)f(x-y)$; here $x-y=v_j-v_1$, the missing factor
in the target product. For $j=1$, the second term of the first exchange gives
the displayed coefficient directly. For $D$, the same induction uses
$h,k$ and the identity
$h(x)k(y)+k(x)k(y-x)=k(y)h(x-y)$, verified by substituting
$h(z)=(z+i)/z$ and $k(z)=-i/z$. This proves both formulas for all $M$.
[F2, step 2.1, step 1.2, algebra]

4.1 Apply step 3.1 with $v_j=\lambda_j$ and add its $A$ and $D$ equations.
The coefficient of $\prod_kB(\lambda_k)\Omega$ is exactly $\Lambda(u)$ in
the statement. For each $j$, the combined coefficient of
$B(u)\prod_{k\ne j}B(\lambda_k)\Omega$ is
$$g(u-\lambda_j)\left[ a(\lambda_j)\prod_{k\ne j}f(\lambda_j-\lambda_k) -d(\lambda_j)\prod_{k\ne j}h(\lambda_j-\lambda_k) \right],$$
because $k(u-\lambda_j)=-g(u-\lambda_j)$. The bracket is zero: after
substituting $a,d,f,h$, its equality is precisely the Bethe equation in
[F2], whose denominators are nonzero by the regularity hypotheses. Thus
$\tau(u)\Psi=\Lambda(u)\Psi$ for every $u$ outside the finite root set.
[given, F2, step 1.2, step 3.1, algebra]

5.1 Put $Q(u)=\prod_{j=1}^M(u-\lambda_j)$. The numerator of $\Lambda(u)$ is
$$P(u)=a(u)\prod_{j=1}^M(u-\lambda_j-i) +d(u)\prod_{j=1}^M(u-\lambda_j+i),$$
a polynomial. At $u=\lambda_j$, its value is
$$P(\lambda_j)=i\left[ d(\lambda_j)\prod_{k\ne j}(\lambda_j-\lambda_k+i) -a(\lambda_j)\prod_{k\ne j}(\lambda_j-\lambda_k-i) \right]=0$$
by the same Bethe equation. Since the $\lambda_j$ are distinct, each is a
simple root of $Q$, so the factor theorem gives $Q\mid P$ and $\Lambda=P/Q$
is a polynomial. Both $\tau(u)\Psi$ and $\Lambda(u)\Psi$ are then polynomial
vector-valued functions agreeing away from finitely many points by step 4.1;
their difference has infinitely many zeros and is identically zero. As
$\Psi\ne0$ by [F2], this is an eigenvector identity for every $u$, with no
claim that other eigenvectors arise this way. [given, F2, step 4.1, algebra] ∎

