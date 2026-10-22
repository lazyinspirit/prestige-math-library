---
id: lem-gr-fx-so-plus-connected
kind: lemma
title: Connectedness of the proper orthochronous Lorentz group
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-lorentz-map-and-lorentz-group
  - lem-lorentz-map-preserves-metric-and-causal-structure
  - lem-timelike-cone-has-two-convex-components
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
sources:
  references:
    - title: "Blagoje Oblak, From the Lorentz Group to the Celestial Sphere, arXiv:1508.00920"
      url: "https://arxiv.org/pdf/1508.00920"
      locator: "§§1.5–1.6, standard boost-rotation decomposition and connected components; §2.3, PDF pp. 24–27"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
physical_scope: null
---

## Statement

Let $\eta=\operatorname{diag}(-1,1,1,1)$ on $\mathbb R^4$ and let
$C^+:=\{(t,x)\in\mathbb R\times\mathbb R^3:t>|x|\}$. Give
$M_4(\mathbb R)$ its Euclidean topology and define
$O(1,3):=\{L\in M_4(\mathbb R):L^{\mathsf T}\eta L=\eta\}$ with the
induced subspace topology. Define
$SO^+(1,3):=\{L\in O(1,3):\det L=1,\ L(C^+)=C^+\}$ with the same induced
topology. The **identity component** means the connected component of $I_4$
in $O(1,3)$ for this topology. Then $SO^+(1,3)$ is path-connected and equals
that identity component.

## Statement references

[[def-lorentz-map-and-lorentz-group]]

[[lem-lorentz-map-preserves-metric-and-causal-structure]]

## Facts & Assumptions

**Given:** The Minkowski vector space $(\mathbb R^4,\eta)$, the future cone $C^+$, and a map $\Lambda\in SO^+(1,3)$.

[F1] A linear Lorentz map preserves $\eta$, has determinant $+1$ when proper, maps the future cone onto itself when orthochronous, and these maps form a group ([[def-lorentz-map-and-lorentz-group]], [[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[F2] The timelike vectors have exactly two components, represented in these coordinates by $t>|x|$ and $t<-|x|$ ([[lem-timelike-cone-has-two-convex-components]]).

## Proof

1.1 For $u\in\mathbb R^3$, set $\gamma:=\sqrt{1+|u|^2}$ and
$S:=I_3+\frac{uu^{\mathsf T}}{1+\gamma}$. Define
$B(u):=\begin{pmatrix}\gamma&u^{\mathsf T}\\u&S\end{pmatrix}$. The identities
$|u|^2=\gamma^2-1$ and
$S^2=I_3+\bigl(\frac{2}{1+\gamma}+\frac{|u|^2}{(1+\gamma)^2}\bigr)uu^{\mathsf T}
=I_3+uu^{\mathsf T}$ give $B(u)^{\mathsf T}\eta B(u)=\eta$: the time-time entry is $-\gamma^2+|u|^2=-1$, the time-space block is $-\gamma u^{\mathsf T}+u^{\mathsf T}S=0$, and the spatial block is $-uu^{\mathsf T}+S^2=I_3$. Also $B(u)e_0=(\gamma,u)$ is future timelike. For $t\in[0,1]$, the entries of $B(tu)$ are continuous: $\sqrt{1+t^2|u|^2}$ is continuous and its denominator $1+\sqrt{1+t^2|u|^2}$ is positive. Thus the path $t\mapsto B(tu)$ consists of Lorentz maps and starts at the identity, so its determinant, which is always $\pm1$, stays $+1$. Each invertible Lorentz map is a homeomorphism of the timelike set and therefore maps connected components onto connected components. Since $B(tu)e_0$ lies in the future component, $B(tu)$ preserves that component by [F2]. Thus $B(u)\in SO^+(1,3)$. [given, F1, F2, construct, algebra]

2.1 For $\Lambda\in SO^+(1,3)$, write $\Lambda e_0=(\gamma,u)$. Preservation of $\eta$ and the future cone gives $\gamma=\sqrt{1+|u|^2}>0$, so the matrix in step 1.1 satisfies $B(u)e_0=\Lambda e_0$. Then $R:=B(u)^{-1}\Lambda$ is a proper orthochronous Lorentz map fixing $e_0$. Its first column is $e_0$, and preservation of $\eta$ makes its first row $e_0^{\mathsf T}$; therefore $R=\operatorname{diag}(1,R_3)$ with $R_3^{\mathsf T}R_3=I_3$ and $\det R_3=1$. [step 1.1, F1, algebra]

3.1 The real cubic characteristic polynomial of $R_3$ has a real root, and every complex eigenvalue $\lambda$ of an orthogonal matrix has $|\lambda|=1$: on the complexification, $\|R_3v\|^2=v^\dagger R_3^{\mathsf T}R_3v=\|v\|^2$ for an eigenvector $v\ne0$. In particular every real eigenvalue is $+1$ or $-1$. If there were no $+1$ eigenvalue, then either all three eigenvalues would be $-1$, giving determinant $-1$, or the other two would be a conjugate pair with product $1$, again giving determinant $-1$. Both contradict $\det R_3=1$. Choose a unit eigenvector $n$ for eigenvalue $+1$. Its orthogonal plane is invariant; the restriction to that plane is orthogonal with determinant $1$, hence is a two-dimensional rotation by an angle $\theta$. Choose a unit vector $m\perp n$ and then a unit vector $p\perp n,m$ so $(n,m,p)$ is positively oriented; such $m,p$ are obtained by finite orthogonalization in the two-dimensional plane. In this basis the matrix is $\begin{pmatrix}1&0&0\\0&\cos\theta&-\sin\theta\\0&\sin\theta&\cos\theta\end{pmatrix}$. Let $C=(n,m,p)$ be the orthogonal change-of-basis matrix and denote the displayed matrix by $D(\theta)$. Then $R_3=C D(\theta)C^{\mathsf T}$, so $R_3(s):=C D(s\theta)C^{\mathsf T}$ for $s\in[0,1]$ is a continuous path in $SO(3)$ from $I_3$ to $R_3$. [step 2.1, construct, algebra]

4.1 Use the path $B(2tu)$ for $0\le t\le \frac12$, followed by
$B(u)\operatorname{diag}(1,R_3(2t-1))$ for $\frac12\le t\le1$, where $R_3(s)$ is the path from step 3.1. This is a continuous path in $SO^+(1,3)$ from $I_4$ to $\Lambda=B(u)R$. Hence $SO^+(1,3)$ is path-connected. [step 1.1, step 2.1, step 3.1]

5.1 In $O(1,3)$, the determinant takes only the values $+1,-1$, so the subset with determinant $+1$ is both open and closed. The continuous map $L\mapsto Le_0$ takes $O(1,3)$ into the timelike set; by [F2], the preimage of the future timelike component is also both open and closed. Their intersection is $SO^+(1,3)$ and contains $I_4$, so the connected component of $I_4$ in $O(1,3)$ lies in $SO^+(1,3)$. Step 4.1 joins every member of $SO^+(1,3)$ to $I_4$, giving the reverse inclusion. [step 4.1, F1, F2, algebra] ∎
