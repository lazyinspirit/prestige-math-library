---
id: def-finite-cusp-pseudo-laplacian-data
kind: definition
title: Finite-cusp energy spaces and pseudo-Laplacian data
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
  - title: Yves Colin de Verdière, Pseudo-laplaciens II, Annales de l'Institut Fourier 33(2) (1983), 87–113
    url: https://www.numdam.org/article/AIF_1983__33_2_87_0.pdf
    locator: 'Sections 1–2, printed pp. 89–92 / PDF pp. 4–7: the one-cusp energy form, cutoff average space and pseudo-Laplacian conventions; finite-cusp and unitary-character data are supplied here.'
  - title: Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh
    url: https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf
    locator: 'Sections 4.1–4.4 and 5.1–5.6, printed pp. 19–30 / PDF pp. 19–30: cutoff-kernel continuation and cusp spectral conventions; finite-cusp and unitary-character data are supplied here.'
dependency_level: 6
---

## Definition

Assume the Axiom of Choice. Let $\Delta\leq\operatorname{PSL}_2(\mathbb R)$ be discrete with finite hyperbolic area quotient $X=\Delta\backslash\mathbb H$, and let $\chi:\Delta\to S^1$ be a unitary character, meaning a group homomorphism. Use the hyperbolic metric $ds^2=(dx^2+dy^2)/y^2$, area element $dA_g=dx\,dy/y^2$, and positive Laplacian $\Delta_H=-y^2(\partial_x^2+\partial_y^2)$. By the finite-cusp compactness theorem choose the finite set of parabolic cusp classes, representatives $\xi_1,\ldots,\xi_r$, and orientation-preserving normalizations $N_j$ taking each full stabilizer to $\langle z\mapsto z+1\rangle$. Choose disjoint embedded cusp cylinders $x\bmod 1,\ y>b$ with $b>1$ and compact complement. A smooth section is a smooth function $u:\mathbb H\to\mathbb C$ satisfying $u(\gamma z)=\chi(\gamma)u(z)$; measurable sections are defined by the same equivariance almost everywhere. In the $j$th normalized cylinder write $\chi(T_j)=e^{2\pi i\alpha_j}$ with $0\leq\alpha_j<1$ and $T_j(z)=z+1$; the Fourier frequencies are $n+\alpha_j$, $n\in\mathbb Z$. Let $J=\{j:\alpha_j=0\}$ be the set of open cusps.

Let $d\mu=dx\,dy/y^2$ on $X$ and $H=L^2(X,\chi)$ with $\langle u,v\rangle_H=\int_Xu\overline v\,d\mu$, linear in the first argument. Let $V$ be the energy-form completion of smooth compactly supported sections for
$$\|u\|_V^2=\|u\|_H^2+q(u,u),\qquad q(u,v)=\int_X \nabla u\cdot\overline{\nabla v}\,dA_g.$$
In every normalized cusp chart the energy term is $\int(u_x\overline{v_x}+u_y\overline{v_y})\,dx\,dy$. The full form operator is
$$D(A)=\{u\in V:\text{there is }h\in H\text{ with }q(u,v)=\langle h,v\rangle_H\text{ for every }v\in V\},\qquad Au=h.$$
For a measurable representative of $u\in H$ and $j\in J$, define the constant coefficient for almost every $y>b$ by
$$c_j(u,y)=\int_0^1u\!\left(N_j^{-1}(x+iy)\right)\,dx.$$
For $Y>b$, let $H_Y$ be the kernel of the bounded map $u\mapsto(c_j(u,\cdot))_{j\in J}$ restricted to $y>Y$, with target $\bigoplus_{j\in J}L^2((Y,\infty),y^{-2}dy)$, and let $V_Y=V\cap H_Y$ with the restricted form norm. The constant-coefficient maps are independent of the chosen representative as almost-everywhere classes. Boundedness follows slice by slice from $|c_j(u,y)|^2\leq\int_0^1|u(N_j^{-1}(x+iy))|^2dx$; hence $H_Y$ and $V_Y$ are closed in $H$ and $V$, respectively. The form operator on $H_Y$ is denoted $A_Y$; its existence, self-adjointness and compactness properties are conclusions of the cutoff-Laplacian lemma, not assumptions in this definition.

For $j\in J$ and $\operatorname{Re}s>1$, write the initial Eisenstein Poincaré series
$$E_j(z,s)=\sum_{\gamma\in\Delta_j\backslash\Delta}\chi(\gamma)^{-1}\operatorname{Im}(N_j\gamma z)^s,$$
where $\Delta_j$ is the full stabilizer of $\xi_j$. Its convergence is proved separately. In column convention, $E(s)a=\sum_{j\in J}a_jE_j(s)$, and $\Phi_{kj}(s)$, for $k,j\in J$, denotes the outgoing constant coefficient at open cusp $k$ of column $j$.
## Definition references

[Yves Colin de Verdière, Pseudo-laplaciens II, Ann. Inst. Fourier 33(2) (1983), 87–113](https://www.numdam.org/item/AIF_1983__33_2_87_0.pdf)

[Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh](https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf)

## Source notes

The source locators above record actual reading limits. Every proof step is supplied locally; no external spectral theorem, computation or source-only proof is imported. The general cofinite theorem under PUBLIC AC is used for the congruence consumer36, whose public AC hypothesis matches. This item makes no choice-free claim for 95.
