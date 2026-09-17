---
id: cor-spectral-projections-and-resolution-of-the-identity
kind: corollary
title: Spectral projections and resolution of the identity
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-borel-functional-calculus-for-bounded-normal-operators, def-borel-functional-calculus-for-a-bounded-normal-operator, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, thm-continuous-functional-calculus-properties, lem-spectrum-of-a-self-adjoint-operator-is-real, thm-self-adjoint-norm-and-spectrum-extrema, def-projection-valued-measure, lem-scalar-and-complex-measures-from-a-pvm, def-self-adjoint-positive-unitary-and-normal-operator, thm-hilbert-adjoint-properties, def-spectrum-and-resolvent-of-a-bounded-operator, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.81, printed pp.293–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §4.1 and §6.3, printed pp.113–115 and 173–177"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$, with spectral projection valued measure $E$ on $\sigma(T)$ and Borel
calculus $f\mapsto f(T)$. Then:

1. every spectral projection $E(B)=\mathbf 1_B(T)$ reduces $T$: it commutes
   with $T$ and $T^*$, so its range and its kernel are invariant under $T$ and
   $T^*$;
2. $E(\{\lambda\})H=\ker(T-\lambda I)$ for every $\lambda\in\mathbb C$: the
   eigenspace of $T$ at $\lambda$ is the range of the spectral projection of the
   singleton $\{\lambda\}$, and it is nonzero precisely when
   $E(\{\lambda\})\ne0$;
3. if $T$ is self-adjoint, then
   $F(t):=E\bigl(\sigma(T)\cap(-\infty,t]\bigr)$, $t\in\mathbb R$, is an
   increasing family of orthogonal projections which is strongly right
   continuous, $\lim_{s\downarrow t}F(s)=F(t)$ in the strong operator topology,
   and $\lim_{t\to-\infty}F(t)=0$, $\lim_{t\to+\infty}F(t)=I$ strongly.

## Facts & Assumptions

[A1] The Borel calculus satisfies $(fg)(T)=f(T)g(T)=g(T)f(T)$, $\overline f(T)=f(T)^*$, $f(T)$ is bounded by $\|f\|_\infty$, and $\mathbf 1_B(T)=E(B)$; in particular $B\mapsto E(B)$ satisfies $E(B\cap C)=E(B)E(C)$, $E(\varnothing)=0$, $E(\sigma(T))=I$ and finite additivity on disjoint measurable sets ([[thm-borel-functional-calculus-for-bounded-normal-operators]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]], [[def-projection-valued-measure]]).

[A2] $T=\Phi_E(z)=\int z\,dE(z)$ and $\langle f(T)x,y\rangle=\int f\,dE_{x,y}$ for bounded Borel $f$, with $E_{x,y}=\langle E(\cdot)x,y\rangle$ a finite regular complex measure and $E_x=\langle E(\cdot)x,x\rangle$ a positive measure of mass $\|x\|^2$; two finite regular complex measures with equal integrals against all continuous functions are equal ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-borel-functional-calculus-for-bounded-normal-operators]]).

[A3] For normal $T$ and $f$ continuous one has $f(T)x=f(\lambda)x$ whenever $Tx=\lambda x$ ([[thm-continuous-functional-calculus-properties]]).

[A4] For self-adjoint $T$ one has $\sigma(T)\subseteq\mathbb R$, $\min\sigma(T)I\le T\le\max\sigma(T)I$ and $\|T\|=\max\{|\min\sigma(T)|,|\max\sigma(T)|\}$, so $\sigma(T)\subseteq[-\|T\|,\|T\|]$ ([[lem-spectrum-of-a-self-adjoint-operator-is-real]], [[thm-self-adjoint-norm-and-spectrum-extrema]]).

[A5] The adjoint identity $\langle Sx,y\rangle=\langle x,S^*y\rangle$ and the definition of the spectrum via $\lambda I-T$ ([[thm-hilbert-adjoint-properties]], [[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded normal operator $T$ with spectral PVM $E$ and Borel calculus $f\mapsto f(T)$, a Borel set $B\subseteq\sigma(T)$ and a scalar $\lambda\in\mathbb C$.

1.1 $E(B)$ commutes with $T$ and $T^*$: $E(B)T=\Phi_E(\mathbf 1_B)\Phi_E(z)=\Phi_E(\mathbf 1_Bz)=T\,E(B)$ and $E(B)=\Phi_E(\mathbf 1_B)=\Phi_E(\overline{\mathbf 1_B})=\Phi_E(\mathbf 1_B)^*$ is self-adjoint, so taking adjoints gives $E(B)T^*=T^*E(B)$; hence $\operatorname{ran}E(B)$ and $\ker E(B)$ are invariant under $T$ and $T^*$. [A1, A2]

1.2 Eigenvectors of spectral projections: if $x=E(\{\lambda\})x$ then $Tx=\Phi_E(z)x=\Phi_E(z\mathbf 1_{\{\lambda\}})x=\Phi_E(\lambda\mathbf 1_{\{\lambda\}})x=\lambda E(\{\lambda\})x=\lambda x$, so $\operatorname{ran}E(\{\lambda\})\subseteq\ker(T-\lambda I)$. [A1, A2]

1.3 For self-adjoint $T$ define $F(t):=E(\sigma(T)\cap(-\infty,t])$ for real $t$; for $s\le t$ the set $A_s:=\sigma(T)\cap(-\infty,s]$ is contained in $A_t:=\sigma(T)\cap(-\infty,t]$, so $F(s)=E(A_s)=E(A_s\cap A_t)=F(s)F(t)=F(t)F(s)$, and $F(t)-F(s)=E(A_t\setminus A_s)$ is the image of an indicator and therefore an orthogonal projection: $F$ is increasing in the projection order. [A1, A4]

2.1 Conversely, if $Tx=\lambda x$ then for every continuous $f$ one has $\int f\,dE_x=\langle f(T)x,x\rangle=f(\lambda)\|x\|^2$, so the positive measure $E_x$ and the mass $\|x\|^2\delta_\lambda$ are finite regular measures with equal integrals against all continuous functions and hence are equal; therefore $E_x(\sigma(T)\setminus\{\lambda\})=0$, which gives $\|E(\sigma(T)\setminus\{\lambda\})x\|^2=0$ and, since $E(\{\lambda\})+E(\sigma(T)\setminus\{\lambda\})=E(\sigma(T))=I$, the identity $x=E(\{\lambda\})x$; with the preceding step this proves $E(\{\lambda\})H=\ker(T-\lambda I)$. [step 1.2, A1, A2, A3]

2.2 Strong right continuity: for $t<s$ one has $F(s)-F(t)=E(\sigma(T)\cap(t,s])$ and hence $\|(F(s)-F(t))x\|^2=E_x(\sigma(T)\cap(t,s])$; if $t_n\downarrow t$ then the sets $\sigma(T)\cap(t,t_n]$ decrease to the empty set and continuity from above for the finite measure $E_x$ gives $E_x(\sigma(T)\cap(t,t_n])\to0$, so $F(t_n)\to F(t)$ strongly. [step 1.3, A1, A2]

2.3 Limits at infinity: since $\sigma(T)\subseteq[-\|T\|,\|T\|]$, for $t<-\|T\|$ the set $\sigma(T)\cap(-\infty,t]$ is empty and $F(t)=0$, while for $t\ge\|T\|$ it is all of $\sigma(T)$ and $F(t)=E(\sigma(T))=I$; hence the strong limits at the two infinities are $0$ and $I$. [step 1.3, A1, A4]

3.1 The spectral projections reduce $T$, the eigenspace at $\lambda$ is exactly $E(\{\lambda\})H$, and for self-adjoint $T$ the family $F(t)=E(\sigma(T)\cap(-\infty,t])$ is increasing, strongly right continuous, with strong limits $0$ and $I$ at the two infinities. [step 1.1, step 2.1, step 2.2, step 2.3, A5, A6] ∎
