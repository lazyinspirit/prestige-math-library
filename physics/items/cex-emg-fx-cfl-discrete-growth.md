---
id: cex-emg-fx-cfl-discrete-growth
kind: counterexample
title: "Constraint preservation does not imply bounded leapfrog evolution"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
proof_strategy: direct
deps:
  - def-emg-fx-cochain-maxwell
  - alg-emg-fx-leapfrog-cochains
  - prop-emg-fx-discrete-gauss-preservation
dependency_roles:
  def-emg-fx-cochain-maxwell: mathematical-premise
  alg-emg-fx-leapfrog-cochains: mathematical-premise
  prop-emg-fx-discrete-gauss-preservation: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Hiptmair, Maxwell’s Equations: Continuous and Discrete, ETH Research Report 2015-18"
      url: "https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2015/2015-18.pdf"
      locator: "Complete 56-page report inspected. §§3.1–3.3, printed pp. 23–26 (PDF pp. 24–27): incidence complexes and exact topological identities; it supplies no time-step stability claim for this example."
    - title: "Davit Harutyunyan, Adaptive Vector Finite Element Methods for the Maxwell Equations, University of Twente dissertation (2007)"
      url: "https://ris.utwente.nl/ws/portalfiles/portal/6041555/thesis_Harutyunyan.pdf"
      locator: "Complete 210-page dissertation inspected. Ch. 6, §6.8, printed pp. 171–172 (PDF pp. 181–182): a different Whitney finite-element leapfrog with a matrix-dependent CFL bound and a separately stated discrete energy."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement refuted

The statement refuted is: for every finite cochain datum of the type defined in the item named “Finite cochain Maxwell phase space,” every positive rational step size in the item named “Finite compatible leapfrog evolution,” and every initial state satisfying $D_2b_0=0$ and $D_0^{\mathsf T}d_{1/2}=0$, repeated application of its one-step map has a bounded orbit. Here “bounded orbit” means that the Euclidean norm of the coordinate vector $(b_n,d_{n+1/2})$ has finite supremum over all integers $n\geq0$.

## Statement references

[[def-emg-fx-cochain-maxwell]]

[[alg-emg-fx-leapfrog-cochains]]

[[prop-emg-fx-discrete-gauss-preservation]]

## Facts & Assumptions

**Given:** A finite real cochain complex, its positive-definite mass maps, and the one-step update in [[alg-emg-fx-leapfrog-cochains]].

[F1] [[def-emg-fx-cochain-maxwell]]: the constraints are $D_2b=0$ and $D_0^{\mathsf T}d=0$, with $D_1D_0=D_2D_1=0$.

[F2] [[alg-emg-fx-leapfrog-cochains]]: one step is $b^+=b-\tau D_1M_1^{-1}d$ followed by $d^+=d+\tau D_1^{\mathsf T}M_2b^+$.

[F3] [[prop-emg-fx-discrete-gauss-preservation]]: the real one-step map $T_\tau$ preserves both constraints for every $\tau>0$, and on the algorithm's rational input domain it is the exact rational update; when $M_1=M_2=I$, its $\sigma$ is the Euclidean operator norm of $D_1$.

[A1] Define $C^0=\mathbb R^4$, $C^1=\mathbb R^6$, $C^2=\mathbb R^4$, and $C^3=\mathbb R$, with the displayed standard bases. Take the one-step size $\tau=2$, initial data $b_0=x=(1,1,0,0)^{\mathsf T}$ and $d_{1/2}=0$, and matrices

$$D_0=\begin{pmatrix}-1&1&0&0\\-1&0&1&0\\-1&0&0&1\\0&-1&1&0\\0&-1&0&1\\0&0&-1&1\end{pmatrix},\qquad D_1=\begin{pmatrix}1&-1&0&1&0&0\\1&0&-1&0&1&0\\0&1&-1&0&0&1\\0&0&0&1&-1&1\end{pmatrix},\qquad D_2=\begin{pmatrix}-1&1&-1&1\end{pmatrix},\qquad M_1=I_6,\quad M_2=I_4.$$

## Counterexample

1.1 The matrices in [A1] are the signed boundary-incidence maps of one oriented tetrahedron, with edges ordered $01,02,03,12,13,23$, faces ordered $012,013,023,123$, and cell orientation $0123$. Matrix multiplication gives $D_1D_0=0_{4\times4}$ and $D_2D_1=0_{1\times6}$. Also $D_2x=-1+1=0$ and $D_0^{\mathsf T}d_{1/2}=0_{4\times1}$, so the initial state satisfies both constraints. [given, F1, A1, algebra]

2.1 Put $c:=(-1,1,-1,1)^{\mathsf T}$, so $D_2=c^{\mathsf T}$. Direct multiplication gives $D_1D_1^{\mathsf T}=\begin{pmatrix}3&1&-1&1\\1&3&1&-1\\-1&1&3&1\\1&-1&1&3\end{pmatrix}=4I_4-cc^{\mathsf T}$. For every $z\in\mathbb R^4$, this gives $\lVert D_1^{\mathsf T}z\rVert_2^2=4\lVert z\rVert_2^2-(c^{\mathsf T}z)^2\leq4\lVert z\rVert_2^2$. For real coordinate vectors $u,v\in\mathbb R^m$, direct expansion gives $\lVert u\rVert_2^2\lVert v\rVert_2^2-(u^{\mathsf T}v)^2=\sum_{1\leq i<j\leq m}(u_iv_j-u_jv_i)^2\geq0$, hence $|u^{\mathsf T}v|\leq\lVert u\rVert_2\lVert v\rVert_2$. Applying this with $u=D_1^{\mathsf T}z$ and $v\in\mathbb R^6$ gives $|z^{\mathsf T}D_1v|\leq2\lVert z\rVert_2\lVert v\rVert_2$. For $w=D_1v$, applying the same identity with $u=z$ and $v=w$ gives $|z^{\mathsf T}w|\leq\lVert w\rVert_2$ for unit $z$; if $w\ne0$ equality is attained at $z=w/\lVert w\rVert_2$, while if $w=0$ both sides are zero. Thus $\lVert w\rVert_2=\max_{\lVert z\rVert_2=1}|z^{\mathsf T}w|$ and $\lVert D_1v\rVert_2\leq2\lVert v\rVert_2$ for every $v\in\mathbb R^6$. Since $c^{\mathsf T}x=0$, $e:=x/\sqrt2$ is unit and $D_1D_1^{\mathsf T}e=4e$; consequently $f:=D_1^{\mathsf T}e/2$ is unit and $D_1f=2e$. Thus the operator norm of $D_1$ is exactly $2$, attained at $f$. Here $M_1=M_2=I$, so the $\sigma$ defined in [F3] is $2$. For a state $b=ue$, $d=vf$, the update in [F2] with $\tau=2$ gives $u^+=u-4v$ and $v^+=v+4u^+=4u-15v$, hence the invariant two-dimensional subspace has matrix $\begin{pmatrix}1&-4\\4&-15\end{pmatrix}$. The initial state has modal coordinates $(u,v)=(\sqrt2,0)$. [given, A1, F2, F3, step 1.1, algebra]

3.1 The matrix in step 2.1 has trace $-14$, determinant $1$, and eigenvalues $\lambda_-=-7-4\sqrt3$ and $\lambda_+=-7+4\sqrt3$, found by solving $\lambda^2+14\lambda+1=0$. Since $6<4\sqrt3<7$, $\lambda_-<-1$ and $-1<\lambda_+<0$. Direct substitution gives eigenvectors $v_-=(1,2+\sqrt3)^{\mathsf T}$ and $v_+=(1,2-\sqrt3)^{\mathsf T}$; their determinant is $-2\sqrt3\neq0$, so write the initial modal vector as $(\sqrt2,0)^{\mathsf T}=a v_-+b v_+$. The coefficient $a$ is nonzero, since otherwise $(\sqrt2,0)^{\mathsf T}$ would be a multiple of $v_+$, whose second coordinate $2-\sqrt3$ is nonzero. The first modal coordinate after $n$ steps is therefore $u_n=a\lambda_-^n+b\lambda_+^n$. If $u_n$ were bounded, then $b\lambda_+^n$ would be bounded because $|\lambda_+|<1$, so their difference $a\lambda_-^n$ would be bounded, contradicting $a\neq0$ and $|\lambda_-|>1$. Since $\lVert b_n\rVert_2\geq|u_n|$, the state orbit is unbounded. [given, step 2.1, algebra]

4.1 By [F3], each update preserves both constraints, and step 1.1 sets them to zero initially. Explicitly, $D_2b^+=D_2b-\tau D_2D_1M_1^{-1}d=D_2b$ and $D_0^{\mathsf T}d^+=D_0^{\mathsf T}d+\tau(D_1D_0)^{\mathsf T}M_2b^+=D_0^{\mathsf T}d$, so induction gives zero constraints at every iterate. Thus exact constraint preservation holds at every step although this rational finite-complex algorithm has an unbounded orbit for $\tau\sigma=4>2$. This refutes the stated bounded-orbit claim. [given, F1, F2, F3, A1, step 1.1, step 3.1, algebra] ∎
