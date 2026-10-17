---
id: def-validated-periodic-shooting-jet-enclosure
kind: definition
title: "Certified residual, Jacobian, trajectory, and monodromy enclosures for periodic shooting"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - def-verified-flow-variational-range-oracle
  - def-real-boxes-and-interval-jacobian-enclosures
  - alg-validated-euler-flow-and-monodromy-enclosure
  - thm-validated-euler-flow-and-monodromy-enclosure-soundness
  - lem-c1-ode-flow-on-common-tube
  - prop-shooting-residual-derivative
  - lem-real-interval-arithmetic-preserves-enclosure
  - lem-directed-dyadic-rounding-enclosure-and-error
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
---

## Definition

Let $f(x,\mu)$ be $C^2$ on an open set in $\mathbb R^d\times\mathbb R^p$, let $q=(x,\mu)$, and set $g(q)=(f(x,\mu),0_p)$. Write $Pq=x$. For each fixed $\mu$, let $\Phi_\theta(q)$ be the time-$\theta$ flow of $q'=g(q)$, so its parameter coordinates remain constant. For an affine phase $\psi(x)=c^\top(x-x_{\rm ref})$, define
$$
G(q,\theta)=\begin{bmatrix}P\Phi_\theta(q)-Pq\\\psi(Pq)\end{bmatrix}.
$$
For $p=0$ and $c\ne0$ this is the shooting residual in [[def-phase-bordered-periodic-orbit-bvp]]. Its Jacobian is
$$
DG(q,\theta)=\begin{bmatrix}P\mathcal M-P& f(P\Phi_\theta(q),\mu)\\ c^\top P&0\end{bmatrix},\qquad \mathcal M=D_q\Phi_\theta(q).
$$

For a rational box $Q=X\times\Lambda\times\Theta$ with $\Theta\subset(0,\infty)$, a **validated shooting jet enclosure** consists of: (i) a box containing $P\Phi_\theta(q)$ for every $q,\theta$ in the input; (ii) a box containing the residual $G(Q)$; (iii) an interval matrix $J(Q)$ containing every $DG(q,\theta)$; and (iv) trajectory and monodromy boxes containing every scaled trajectory $P\Phi_{\theta s}(q)$, $0\le s\le1$, and the physical-state block of $\mathcal M$. The input and range-oracle boxes may have arbitrary rational endpoints, as in [[def-verified-flow-variational-range-oracle]]. The returned interval enclosures have finite dyadic endpoints under [[def-real-boxes-and-interval-jacobian-enclosures]]. Before applying dyadic interval arithmetic, round every rational operand outward to finite dyadic endpoints using [[lem-directed-dyadic-rounding-enclosure-and-error]], then use [[lem-real-interval-arithmetic-preserves-enclosure]]; exact rational set operations in the Euler provider remain exact. If any conversion overflows or is unavailable within the supplied cap, return inconclusive. The exact derivative formula follows from [[prop-shooting-residual-derivative]], and its flow sensitivity is on the common tube of [[lem-c1-ode-flow-on-common-tube]]. A finite success record is admissible only when obtained by the range-oracle procedure of [[alg-validated-euler-flow-and-monodromy-enclosure]], whose exact flow and monodromy enclosure is guaranteed by [[thm-validated-euler-flow-and-monodromy-enclosure-soundness]], with all queries and interval operations successful and outward under [[def-verified-flow-variational-range-oracle]]. For this call instantiate that procedure and its soundness theorem with state dimension $n=d+p$, initial state box $X\times\Lambda$, field $g(q)=(f(x,\mu),0_p)$, and period interval $\Theta$. Its augmented field is $H_g(q,Z,\theta)=(\theta g(q),\theta Dg(q)Z,0)$ with $Z\in\mathbb R^{n\times n}$; the supplied range provider is for this $H_g$ on its actual compact convex rational tube $K_g\subset\mathbb R^{n+n^2+1}$. Initialize $Y_0=(X\times\Lambda)\times\{I_n\}\times\Theta$ and require every Euler tube query and inclusion check in this same $K_g$ to succeed. Retain the full $n\times n$ endpoint variation enclosure for $\mathcal M=D_q\Phi_\theta(q)$ when forming $P\mathcal M-P$: its first $d$ rows include both the state and parameter sensitivity columns, while its lower parameter rows are $(0,I_p)$ because the parameters are constant. The physical monodromy is the first $d$ rows and first $d$ columns of $\mathcal M$.

To enclose the period column, let $X_T$ be the first $d$ coordinate projection of the successful endpoint enclosure $Y_N$. The exact augmented endpoint lies in $X_T\times\Lambda$: its parameter equals its initial value in $\Lambda$, even if a returned interval coordinate is wider. Form the rational query box $Q_T=(X_T\times\Lambda)\times\{I_n\}\times\Theta$ and check $Q_T\subseteq K_g$ before requesting $H_g^\#(Q_T)$ from that same supplied provider. If the inclusion or query fails, return inconclusive. The first $d$ entries of its vector-field block enclose every $\theta f(P\Phi_\theta(q),\mu)$; divide these entries outward by the positive interval $\Theta$ to enclose the entire period column. Thus the query includes every admitted parameter and the matching augmented identity. For $p=0$, $n=d$ and the parameter factor is the singleton empty tuple, giving the fixed-parameter construction. These residual/Jacobian boxes are in the named coordinate order $(q,\theta)=(x,\mu,\theta)$; a section callback whose variables are ordered $(x,\theta,\mu)$ applies that fixed column permutation before appending its affine section row. Any unavailable query or inclusion returns inconclusive. A finite Newton, multiple-shooting, or collocation residual alone is not a validated jet enclosure.
