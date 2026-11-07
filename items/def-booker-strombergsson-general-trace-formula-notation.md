---
id: def-booker-strombergsson-general-trace-formula-notation
kind: definition
title: Booker–Strömbergsson General Trace-Formula Notation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-maass-spectral-parameter
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Booker and A. Strömbergsson, Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf"
      locator: "§2.1, equations (2.5), (2.18), (2.25), (2.26), (2.32), and (2.33), together with the notation following (2.37)."
---

## Definition

Let $G=\operatorname{PGL}_2(\mathbb R)$ act on the upper half-plane by
orientation-preserving fractional-linear maps and orientation-reversing
antiholomorphic maps. Put $G^+=\operatorname{PSL}_2(\mathbb R)$. Let
$\Gamma<G$ be discrete of finite hyperbolic area, with
$\Gamma^+=\Gamma\cap G^+$ of index two, and let $\chi:\Gamma\to S^1$ be a
unitary character. Use hyperbolic measure $d\mu=dx\,dy/y^2$ and write
$\operatorname{area}(\Gamma\backslash\mathbb H)$ for the quotient area.
Choose $V\in\Gamma\setminus\Gamma^+$, a canonical fundamental domain
$F$ for $\Gamma^+\backslash\mathbb H$, and representatives
$\eta_1,\ldots,\eta_\kappa$ of its cusp classes. For each cusp choose
$N_j\in G^+$ sending $\eta_j$ to infinity and normalizing its stabilizer as
$$T_j=N_j^{-1}S^{-1}N_j,\qquad S(z)=z+1.$$
Choose $B_0>1$ so the cusp neighborhoods
$C_j(Y)=N_j^{-1}([0,1]+i[Y,\infty))$ are pairwise disjoint and contained in
$F$ for $Y\ge B_0$, and put $F_Y=F\setminus\bigcup_{j=1}^{\kappa}C_j(Y)$.
There are indices $k(j)$, elements $U_j\in\Gamma^+$, and real numbers $x_j$
such that
$$k(k(j))=j,\qquad
V T_jV^{-1}=U_jT_{k(j)}^{-1}U_j^{-1},\qquad
V=U_jN_{k(j)}^{-1}
\begin{pmatrix}-1&x_j\\0&1\end{pmatrix}N_j.$$

Let
$$\mathcal M=\{T\in\Gamma:T\text{ fixes no cusp of }\Gamma^+\},\qquad
\mathcal C_{\Gamma,\chi}=\{j:1\le j\le\kappa,\ \chi(T_j)=1\}.$$
For a nonidentity $T\in G$, define its type by its conjugacy class: it is
hyperbolic or a glide reflection if conjugate to
$\begin{psmallmatrix}\gamma&0\\0&1\end{psmallmatrix}$ with $|\gamma|>1$,
elliptic if conjugate to
$k(\theta)=\begin{psmallmatrix}\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta\end{psmallmatrix}$ with $0<\theta\le\pi/2$,
parabolic if conjugate to $\begin{psmallmatrix}1&1\\0&1\end{psmallmatrix}$,
and a reflection if conjugate to $\begin{psmallmatrix}-1&0\\0&1\end{psmallmatrix}$.
For a matrix representative of $T$, $\operatorname{sgn}(\det T)\in\{1,-1\}$
is independent of the representative in $G$.
For hyperbolic, glide-reflection, or reflection $T$, set
$N(T)=|\gamma|$ in the first normal form, so $N(T)=1$ for a reflection. For
elliptic $T$, let $\theta(T)$ be its angle. Write $Z_\Gamma(T)$ for the
centralizer of $T$ in $\Gamma$.

For $k(j)=j$ and $v\in\{0,1\}$, put
$$T_{jv}=N_j^{-1}
\begin{pmatrix}-1&x_j+v\\0&1\end{pmatrix}N_j,\qquad
\mathcal H=\{(j,v):k(j)=j,\ v\in\{0,1\}\}.$$
If the second fixed point of $T_{jv}$ is $V_2\eta_\ell$ for
$V_2\in\Gamma^+$, choose the determinant-one representative of
$N_jV_2N_\ell^{-1}$ whose lower-left entry $c$ is positive, and define
$c_{jv}=c$.

For $j\in\mathcal C_{\Gamma,\chi}$, define the Eisenstein series initially
for $\operatorname{Re}(s)>1$ by
$$E_j(z,s,\chi)=\sum_{W\in[T_j]\backslash\Gamma^+}
\chi(W^{-1})(\operatorname{Im}(N_jWz))^s.$$
For $j,\ell\in\mathcal C_{\Gamma,\chi}$, let $\phi_{j\ell}(s)$ be the
scattering coefficient in the constant term at cusp $\eta_\ell$ for
$\operatorname{Re}(s)>1$:
$$E_j(N_\ell^{-1}(x+iy),s,\chi)
=\delta_{j\ell}y^s+\phi_{j\ell}(s)y^{1-s}
+\text{nonconstant Fourier terms}.$$
Here $\delta_{j\ell}$ is the Kronecker delta. In the trace identity,
$\Gamma(s)$ denotes Euler's gamma function and $\log$ is the natural
logarithm.
Choose $\mathcal R_{\Gamma,\chi}\subseteq\mathcal C_{\Gamma,\chi}$ so that it
contains exactly one of $j,k(j)$ when $k(j)\ne j$, and, when $k(j)=j$, it
contains $j$ exactly if $\chi(V^{-1}U_j)=1$. Put
$$\varepsilon_\ell=\begin{cases}2,&k(\ell)=\ell,\\1,&k(\ell)\ne\ell,\end{cases}
\qquad
\phi^\Gamma_{j\ell}(s)=\varepsilon_\ell^{-1}
\bigl(\phi_{j\ell}(s)+\chi(V^{-1}U_\ell)\phi_{j,k(\ell)}(s)\bigr)
\quad(j,\ell\in\mathcal R_{\Gamma,\chi}).$$
Define the modified scattering matrix and its determinant by
$$\Phi_\Gamma(s)=[\phi^\Gamma_{j\ell}(s)]_{j,\ell\in\mathcal R_{\Gamma,\chi}},
\qquad \varphi_\Gamma(s)=\det\Phi_\Gamma(s).$$
When $\mathcal R_{\Gamma,\chi}=\varnothing$, the matrix terms indexed by it
are omitted. For an eigenvalue $\lambda_j$ of the positive-sign Laplacian,
let $t_j$ be the Maass spectral parameter from the definition of that term;
the trace-formula branch is $r_j=t_j$ for $\lambda_j\ge1/4$ and
$r_j=-t_j$ for $0\le\lambda_j<1/4$.

## Definition references

[A. Booker and A. Strömbergsson, *Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture*](https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf)
