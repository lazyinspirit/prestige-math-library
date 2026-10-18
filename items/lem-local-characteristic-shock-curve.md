---
id: lem-local-characteristic-shock-curve
kind: lemma
title: "Local shock curve by an augmented Rankine–Hugoniot equation"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hyperbolic-system-and-characteristic-families
  - def-rankine-hugoniot-and-lax-shocks
  - lem-smooth-simple-characteristic-eigenpairs
  - thm-euclidean-implicit-function-theorem
  - thm-heine-cantor-metric
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Alberto Bressan, Hyperbolic Conservation Laws: An Illustrated Tutorial"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.2, printed pp. 13–14: shock curves from an augmented Rankine–Hugoniot system"
---

## Statement

Let $G\subseteq\mathbb R^m$ be open, let $f:G\to\mathbb R^m$ be $C^3$, and
let $\bar u\in G$ be a state where $A(\bar u)=Df(\bar u)$ has $m$ distinct
real eigenvalues $\lambda_1(\bar u)<\cdots<\lambda_m(\bar u)$.
Fix $i\in\{1,\ldots,m\}$ and its $i$th eigenpair
$(\lambda_i(\bar u),r_i(\bar u))$. There are a neighborhood $N_0$ of $\bar u$,
$\eta>0$, and $C^1$ functions $v_i(\sigma,u_0),s_i(\sigma,u_0)$ for
$u_0\in N_0$, $|\sigma|<\eta$, such that, with $\ell_i(u_0)$ the dual left
eigenvector normalized by $\ell_i(u_0)\cdot r_i(u_0)=1$,
$$\ell_i(u_0)\cdot v_i(\sigma,u_0)=1,\qquad S_i(\sigma;u_0)=u_0+\sigma v_i(\sigma,u_0),$$
and for $\sigma\ne0$ the pair $(u_0,S_i(\sigma;u_0))$ satisfies
Rankine–Hugoniot with speed $s_i(\sigma,u_0)$. Also
$S_i(0;u_0)=u_0$ and $\partial_\sigma S_i(0;u_0)=r_i(u_0)$. If the $i$th
field is genuinely nonlinear on $N_0$ and
$d_i(u):=D\lambda_i(u)r_i(u)$ has constant nonzero sign, then all sufficiently
small nonzero strengths with $\sigma d_i(u_0)<0$ give strict Lax $i$-shocks.

## Facts & Assumptions

**Given:** An open state domain $G$, a $C^3$ flux $f:G\to\mathbb R^m$, a state
$\bar u\in G$ at which $Df(\bar u)$ has $m$ distinct real eigenvalues, and an
index $i\in\{1,\ldots,m\}$.

[F1] [[def-hyperbolic-system-and-characteristic-families]]: $A=Df$ is $C^2$; genuine nonlinearity means $D\lambda_i r_i$ is nonzero and has constant sign after shrinking the neighborhood.

[F2] [[def-rankine-hugoniot-and-lax-shocks]]: a strict Lax $i$-shock satisfies $[f]=s[u]$ and the ordered family inequalities.

[F3] [[lem-smooth-simple-characteristic-eigenpairs]]: near a state with $m$
distinct real eigenvalues, local $C^2$ ordered eigenpairs exist and their
eigenvectors form a basis.

[F4] [[thm-euclidean-implicit-function-theorem]]: a $C^1$ equation with invertible derivative in the unknowns has a unique local $C^1$ solution.

[F5] [[thm-heine-cantor-metric]]: a continuous function on a compact metric space is uniformly continuous.

## Proof

1.1 On a neighborhood where [F3] supplies the $C^2$ right-eigenvector frame, let $R(u)$ have columns $r_j(u)$ and let $\ell_i(u)^T$ be row $i$ of $R(u)^{-1}$. Then $R^{-1}A=\operatorname{diag}(\lambda_j)R^{-1}$, so $\ell_i^Tr_j=\delta_{ij}$ and $\ell_i$ is a left eigenvector. For $v$ near $r_i(\bar u)$ define $G(u_0,\sigma,v,s)=\left(\int_0^1 Df(u_0+t\sigma v)v\,dt-sv,\;\ell_i(u_0)\cdot v-1\right)$. Since $Df$ is $C^2$, this $G$ is $C^1$ in all variables and vanishes at $(\bar u,0,r_i(\bar u),\lambda_i(\bar u))$. [given, F1, F3, construct]


2.1 The derivative of $G$ in $(v,s)$ at that point sends $(w,\alpha)$ to $((A(\bar u)-\lambda_i I)w-\alpha r_i(\bar u),\ell_i(\bar u)\cdot w)$. If it vanishes, pairing the first component with $\ell_i(\bar u)$ gives $\alpha=0$; simplicity then makes $w$ a multiple of $r_i(\bar u)$, and the last component forces $w=0$. Hence this square derivative is invertible. [step 1.1, F3, algebra]


3.1 Apply [F4] with parameter $(u_0,\sigma)$ and unknowns $(v,s)$. It gives unique $C^1$ functions $v_i(\sigma,u_0),s_i(\sigma,u_0)$ on a product neighborhood. Set $S_i(\sigma;u_0)=u_0+\sigma v_i(\sigma,u_0)$. For $\sigma\ne0$, multiplying the first equation by $\sigma$ and using the fundamental theorem of calculus gives $f(S_i(\sigma;u_0))-f(u_0)=s_i(\sigma,u_0)(S_i(\sigma;u_0)-u_0)$. At $\sigma=0$, the unique normalized eigenvector is $v_i(0,u_0)=r_i(u_0)$; hence $\partial_\sigma S_i(0;u_0)=r_i(u_0)$. [step 2.1, F1, F3, F4, algebra]


4.1 At any fixed $u_0\in N_0$, differentiate the first component of $G=0$ at $\sigma=0$. It gives $(A(u_0)-\lambda_i I)\partial_\sigma v_i(0,u_0)+\tfrac12D^2f(u_0)[r_i,r_i]-\partial_\sigma s_i(0,u_0)r_i=0$. Pairing with $\ell_i(u_0)$ yields $\partial_\sigma s_i(0,u_0)=\tfrac12\ell_i(u_0)\cdot D^2f(u_0)[r_i,r_i]=\tfrac12D\lambda_i(u_0)r_i(u_0)$; the last equality follows by differentiating $Ar_i=\lambda_i r_i$ in direction $r_i$ and pairing with $\ell_i$. [step 3.1, F3, algebra]


5.1 Shrink the base neighborhood to an open ball $N_0$ whose closure $K$ lies inside the IFT parameter neighborhood, and choose $\eta>0$ so $K\times[-\eta,\eta]$ lies there. By continuity and the nonzero value of $d_i(\bar u)$, shrink $K$ so $|d_i(u_0)|$ and all eigenvalue gaps have positive lower bounds on $K$. The $C^1$ functions $(u_0,\sigma)\mapsto\lambda_i(S_i(\sigma;u_0))$ and $s_i(\sigma,u_0)$ have uniformly continuous $\sigma$ derivatives on the compact product $K\times[-\eta,\eta]$ by [F5]. Their first-order expansions at $\sigma=0$ therefore have uniform remainders over $u_0\in K$: $$\lambda_i(S_i(\sigma;u_0))=\lambda_i(u_0)+\sigma d_i(u_0)+o(|\sigma|),\qquad s_i(\sigma,u_0)=\lambda_i(u_0)+\tfrac12\sigma d_i(u_0)+o(|\sigma|).$$ For $\sigma d_i(u_0)<0$ and sufficiently small uniform $|\sigma|$, this gives $\lambda_i(S_i(\sigma;u_0))<s_i(\sigma,u_0)<\lambda_i(u_0)$. The other-family inequalities in [F2] follow by continuity from the positive gaps, after shrinking $N_0$ and $\eta$. [step 4.1, F1, F2, F5, algebra, choose] ∎

