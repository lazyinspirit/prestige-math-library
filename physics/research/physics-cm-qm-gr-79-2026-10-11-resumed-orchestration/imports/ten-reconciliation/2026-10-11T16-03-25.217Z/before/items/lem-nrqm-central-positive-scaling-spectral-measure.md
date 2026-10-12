---
id: lem-nrqm-central-positive-scaling-spectral-measure
aliases: [nrqm-central-positive-scaling-spectral-measure]
kind: lemma
domain: mathematics
title: "Positive scaling of a self-adjoint operator: the spectral projection-valued measure transforms by the preimage of the scaling map"
status: draft
origin: session
dependency_level: 0
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-projection-valued-measure, def-unbounded-integral-against-a-pvm, lem-unbounded-pvm-integral-is-well-defined-and-closed, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, lem-scalar-and-complex-measures-from-a-pvm, thm-monotone-convergence-for-the-integral, cor-rn-is-locally-compact-and-sigma-compact, def-regular-borel-measure-on-an-lch-space, def-radon-measure-on-an-lch-space, thm-compactness-under-continuous-maps, cor-continuous-functions-are-borel-measurable, thm-algebra-of-continuous-functions, def-homeomorphism-and-open-maps, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-unbounded-pvm-integral-is-well-defined-and-closed: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  cor-rn-is-locally-compact-and-sigma-compact: mathematical-premise
  def-regular-borel-measure-on-an-lch-space: mathematical-premise
  def-radon-measure-on-an-lch-space: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  def-homeomorphism-and-open-maps: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.2 printed pages 58-67 (self-adjoint operators, adjoints and the spectrum under scaling) and Section 3.2 printed pages 99-104 (the spectral theorem and the spectral measure)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis (ETH lecture notes, 2017), Chapter 5 pp. 209-298 (spectral measures, the spectral theorem and the functional calculus for bounded Borel functions)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H\ne\{0\}$ be a
complex Hilbert space, let $A:D(A)\subset H\to H$ be a densely defined
self-adjoint operator with spectral projection valued measure $E$ on the Borel
$\sigma$-algebra of $\mathbb R$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-projection-valued-measure]]), and let $c>0$. Write $cA$ for the operator
with $D(cA):=D(A)$ and $(cA)x:=c\,(Ax)$, and for $m_{c}:\mathbb R\to\mathbb R$,
$m_{c}(\lambda):=c\lambda$, define
$$F(B):=E\bigl(m_{c}^{-1}(B)\bigr)=E\bigl(c^{-1}B\bigr)\qquad(B\subseteq\mathbb R\ \text{Borel}).$$
Then:

(a) $F$ is a regular projection valued measure on the Borel sets of
$\mathbb R$;

(b) for every bounded Borel $f:\mathbb R\to\mathbb C$ the bounded integrals
satisfy $\Phi_{F}(f)=\Phi_{E}(f\circ m_{c})$, and the operator
$\int_{\mathbb R}\lambda\,dF(\lambda)$ of the spectral theorem equals $cA$ with
domain $D(A)$;

(c) consequently $F$ is the spectral projection valued measure $E_{cA}$ of
$cA$: for every Borel $B\subseteq\mathbb R$,
$$E_{cA}(B)=E\bigl(c^{-1}B\bigr);$$in particular the negative spectral subspaces agree,$$E_{cA}\bigl((-\infty,0)\bigr)H=E\bigl((-\infty,0)\bigr)H .$$

The assertion transfers the spectral measure along positive scaling of the
operator. It asserts no spectral type of a particular operator, no multiplicity
statement and no physical interpretation; $c<0$ is not covered, and no
statement is made about unbounded Borel functions of $cA$ beyond the identity
functional calculus stated in (b).

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; a densely defined self-adjoint operator $A$ with spectral PVM $E$; a real $c>0$; the map $m_{c}(\lambda)=c\lambda$ and $F(B)=E(c^{-1}B)$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Spectral theorem.** There is a unique regular PVM $E$ on the Borel sets of $\mathbb R$ with $D(A)=\{x:\int_{\mathbb R}\lambda^{2}dE_{x}(\lambda)<\infty\}$ and $Ax=\int_{\mathbb R}\lambda\,dE(\lambda)x$ for $x\in D(A)$; conversely, for every regular PVM $E'$ on $\mathbb R$ the operator $\int\lambda\,dE'$ with that domain is self-adjoint and its spectral PVM is $E'$ again ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F2] **Projection valued measures.** A PVM $E$ on a measurable space assigns orthogonal projections with $E(\varnothing)=0$, $E(X)=I$, $E(B\cap C)=E(B)E(C)$, and strong countable additivity: for pairwise disjoint $B_{n}$ with union $B$ one has $E(B)x=\sum_{n}E(B_{n})x$ in norm for every $x$; $E$ is regular when the underlying space is locally compact Hausdorff with its Borel $\sigma$-algebra and every $E_{x}(B)=\langle E(B)x,x\rangle$ is a regular Borel measure ([[def-projection-valued-measure]]).

[F3] **Scalar and complex measures from a PVM.** $E_{x}$ is a positive measure with $E_{x}(X)=\|x\|^{2}$, and $E_{x,y}(B)=\langle E(B)x,y\rangle$ is a finite complex measure, linear in $x$ and conjugate-linear in $y$, with $|E_{x,y}(B)|\le\|x\|\,\|y\|$ ([[lem-scalar-and-complex-measures-from-a-pvm]] clauses 1-3).

[F4] **Bounded functional calculus.** For bounded measurable $f$ there is a unique $\Phi_{E}(f)\in\mathcal B(H)$ with $\langle\Phi_{E}(f)x,y\rangle=\int f\,dE_{x,y}$; if $(s_{n})$ are simple with $\|f-s_{n}\|_{\infty}\to0$ then $\Phi_{E}(s_{n})\to\Phi_{E}(f)$ in operator norm; $\|\Phi_{E}(f)x\|^{2}=\int|f|^{2}dE_{x}$; and $\Phi_{E}$ is linear, unital and multiplicative ([[thm-bounded-borel-pvm-integral]] clauses 1, 2, [[thm-pvm-integral-is-a-star-homomorphism]] clauses 1, 2).

[F5] **Unbounded functional calculus.** For measurable $f$ the operator $f(E)$ has domain $D(f(E))=\{x:\int|f|^{2}dE_{x}<\infty\}$ and is defined as the norm limit of $\Phi_{E}(f\mathbf 1_{\{|f|\le n\}})x$; $\|f(E)x\|^{2}=\int|f|^{2}dE_{x}$; and if bounded measurable $g_{n}$ satisfy $|g_{n}|\le C|f|$ pointwise and $g_{n}\to f$ pointwise, then $g_{n}(E)x\to f(E)x$ for every $x\in D(f(E))$ ([[def-unbounded-integral-against-a-pvm]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]]).

[F6] **Monotone convergence.** For a measure $\mu$ and nonnegative measurable $h_{n}$ increasing pointwise to $h$ one has $\int h_{n}\,d\mu\to\int h\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]).

[F7] **Regularity in $\mathbb R$.** $\mathbb R$ is locally compact Hausdorff and $\sigma$-compact ([[cor-rn-is-locally-compact-and-sigma-compact]]); a regular Borel measure is a Radon measure that is also inner regular on Borel sets ([[def-regular-borel-measure-on-an-lch-space]], [[def-radon-measure-on-an-lch-space]]).

[F8] **The scaling map.** The map $m_{c}(\lambda)=c\lambda$ is continuous on $\mathbb R$ with continuous inverse $m_{1/c}$, hence a homeomorphism of $\mathbb R$ onto itself, and it is Borel measurable; the image of a compact set under a continuous map is compact ([[thm-algebra-of-continuous-functions]] clause 5, [[def-homeomorphism-and-open-maps]], [[cor-continuous-functions-are-borel-measurable]], [[thm-compactness-under-continuous-maps]]).

## Proof

**Proof technique:** direct; show that the transported set function $F(B)=E(c^{-1}B)$ is a regular PVM computing the operator $cA$, then identify it with the spectral measure of $cA$ by the uniqueness clause of the spectral theorem.

**Given:** The data of the statement and [F1]-[F8].

1.1 [$F$ is a PVM] For Borel $B$ the set $c^{-1}B$ is Borel because $m_{c}$ is Borel measurable [F8], so $F(B)=E(c^{-1}B)$ is an orthogonal projection; $F(\varnothing)=E(\varnothing)=0$ and $F(\mathbb R)=E(\mathbb R)=I$; $c^{-1}(B\cap C)=c^{-1}B\cap c^{-1}C$ gives $F(B\cap C)=F(B)F(C)$; and for pairwise disjoint $B_{n}$ with union $B$ the sets $c^{-1}B_{n}$ are pairwise disjoint with union $c^{-1}B$, so strong countable additivity of $E$ [F2] gives $\sum_{n}F(B_{n})x=\sum_{n}E(c^{-1}B_{n})x=E(c^{-1}B)x=F(B)x$ for every $x\in H$. Thus $F$ is a PVM on the Borel sets of $\mathbb R$. [F2, F8]

2.1 [$F$ is regular] Fix $x\in H$ and write $\nu:=F_{x}$, so that $\nu(B)=E_{x}(c^{-1}B)$. By [F3], $E_{x}$ is a finite measure with $E_{x}(\mathbb R)=\|x\|^{2}$, so $\nu(\mathbb R)=\|x\|^{2}<+\infty$. For inner regularity let $B$ be Borel and $\varepsilon>0$; by regularity of $E_{x}$ [F7] there is compact $K\subseteq c^{-1}B$ with $E_{x}(c^{-1}B\setminus K)<\varepsilon$. Then $K':=m_{c}(K)$ is compact [F8], $K'\subseteq B$, and by $c^{-1}K'=K$ one has $\nu(K')=E_{x}(K)>E_{x}(c^{-1}B)-\varepsilon=\nu(B)-\varepsilon$. For outer regularity apply the same statement to the complement: choose open $V\supseteq c^{-1}B$ with $E_{x}(V\setminus c^{-1}B)<\varepsilon$; then $V':=m_{c}(V)$ is open [F8], $V'\supseteq B$, and $\nu(V')-\nu(B)=E_{x}(V\setminus c^{-1}B)<\varepsilon$. Hence every $\nu=F_{x}$ is a Radon measure that is inner regular on Borel sets, i.e. a regular Borel measure [F7], and $F$ is a regular PVM. This proves (a). [step 1.1, F3, F7, F8]

2.2 [Bounded functional identity] Let $f$ be bounded Borel. The functional calculi of $E$ and of $F$ exist by [F4], since $F$ is a PVM by step 1.1. For $f=\mathbf 1_{B}$ and all $x,y\in H$, $\langle\Phi_{F}(\mathbf 1_{B})x,y\rangle=\int\mathbf 1_{B}\,dF_{x,y}=F_{x,y}(B)=\langle F(B)x,y\rangle=\langle E(c^{-1}B)x,y\rangle=E_{x,y}(c^{-1}B)=\int\mathbf 1_{c^{-1}B}\,dE_{x,y}=\int(\mathbf 1_{B}\circ m_{c})\,dE_{x,y}=\langle\Phi_{E}(\mathbf 1_{B}\circ m_{c})x,y\rangle$, so the uniqueness clause of [F4] gives $\Phi_{F}(\mathbf 1_{B})=\Phi_{E}(\mathbf 1_{B}\circ m_{c})$. Both sides are linear in the bounded measurable function [F4], so the identity holds for every simple function. For bounded Borel $f$ choose simple $s_{n}$ with $\|f-s_{n}\|_{\infty}\to0$; then $\|f\circ m_{c}-s_{n}\circ m_{c}\|_{\infty}=\|f-s_{n}\|_{\infty}\to0$, and the norm-convergence clause of [F4] applied on both sides gives $\Phi_{F}(f)=\lim\Phi_{F}(s_{n})=\lim\Phi_{E}(s_{n}\circ m_{c})=\Phi_{E}(f\circ m_{c})$. [step 1.1, F4]

3.1 [Domain and operator identity] Put $f(\lambda):=\lambda$, so that $f(E)=A$ and $f(E_{F})=\int\lambda\,dF(\lambda)$ by [F1] and [F5], and put $g:=f\circ m_{c}=m_{c}$, so that $g(E)=cA$. For $n\ge1$ the truncations $f_{n}:=f\mathbf 1_{\{|f|\le n\}}$ are bounded Borel and step 2.2 with $f_{n}$ gives $\Phi_{F}(f_{n})=\Phi_{E}(f_{n}\circ m_{c})=\Phi_{E}(g_{n})$, where $g_{n}=f_{n}\circ m_{c}=g\mathbf 1_{\{|g|\le n\}}$. For every $x\in H$ the norm identities of [F4] and [F5] give $\int|f_{n}|^{2}dF_{x}=\|\Phi_{F}(f_{n})x\|^{2}=\|\Phi_{E}(g_{n})x\|^{2}=\int|g_{n}|^{2}dE_{x}$; since $|f_{n}|^{2}\uparrow\lambda^{2}$ and $|g_{n}|^{2}\uparrow c^{2}\lambda^{2}$ pointwise, monotone convergence [F6] gives $\int\lambda^{2}dF_{x}=c^{2}\int\lambda^{2}dE_{x}$ for every $x\in H$. Hence $D(f(E_{F}))=\{x:\int\lambda^{2}dF_{x}<\infty\}=D(A)$ by [F1] and [F5]. For $x\in D(A)$ the convergence clause of [F5] applied to $g_{n}\to g$ with $|g_{n}|\le|g|$ gives $f(E_{F})x=\lim\Phi_{F}(f_{n})x=\lim\Phi_{E}(g_{n})x=g(E)x$; since $g_{n}=c\,f_{n}$ and $\Phi_{E}$ is linear [F4], the same limit equals $c\lim\Phi_{E}(f_{n})x=c\,f(E)x=cAx$. Therefore $f(E_{F})=cA$ with domain $D(A)$. [step 2.2, F1, F4, F5, F6, algebra]

4.1 [Identification of the spectral measure] By steps 1.1 and 2.1, $F$ is a regular PVM on the Borel sets of $\mathbb R$, and by step 3.1 the operator $\int\lambda\,dF(\lambda)=f(E_{F})$ equals $cA$ with domain $D(A)$. The converse clause of the spectral theorem [F1] applied to the regular PVM $F$ shows that $\int\lambda\,dF(\lambda)$ is self-adjoint with spectral PVM $F$; by the uniqueness clause of [F1] applied to the self-adjoint operator $cA$, its spectral PVM is $E_{cA}=F$, that is, $E_{cA}(B)=E(c^{-1}B)$ for every Borel $B$. This is (c) for general $B$; at $B=(-\infty,0)$ one has $c^{-1}(-\infty,0)=(-\infty,0)$, so the negative spectral subspaces agree. [step 1.1, step 2.1, step 3.1, F1] ∎

## Remarks

- **Why the preimage direction.** The candidate set function must satisfy
  $F(B)=E(c^{-1}B)$ rather than $E(cB)$: the condition $m_{c}X=m_{c}$ in the
  spectral theorem forces $F$ to assign to $B$ the spectral mass that $E$
  assigns to the preimage, as step 3.1 verifies by computing the transported
  quadratic forms.
- **Use in this physics pair.** The lemma is used only to transfer the
  spectral resolution of the unscaled Coulomb operator
  $-\Delta-\gamma/|\cdot|$ to the model's energy operator
  $H_{\kappa}=(\hbar^{2}/2m)C_{\gamma}$; no further spectral geometry is
  claimed.
