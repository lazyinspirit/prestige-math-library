---
id: thm-nrqm-controlled-dynamics-controlled-born-amplitude-error
aliases: [nrqm-controlled-dynamics-controlled-born-amplitude-error]
kind: theorem
domain: mathematics
title: "Controlled Born amplitude error"
status: draft
origin: pipeline
dependency_level: 10
deps: [cor-cauchy-schwarz-inequality-for-l-two, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-polar-coordinates-formula-for-lebesgue-measure, thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux, thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility, lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact, def-operator-norm, def-bounded-linear-operator, def-hilbert-space, def-countable-choice]
dependency_roles:
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux: mathematical-premise
  thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility: mathematical-premise
  lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact: mathematical-premise
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Born Approximation pp. 211-213 (first Born approximation and its validity condition)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (Neumann series for the scattering amplitude)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Adopt the
hypotheses and notation of
[[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]]: real
$V$ bounded with $\operatorname{supp}V\subseteq B_R$, $k>0$, $d\in S^2$, the
compact operator $K_k$, and write $q:=\|K_k\|$. Then:

(a) *Neumann control.* If $q<1$ then $u=(I+K_k)^{-1}e_{\mathrm{inc}}$ satisfies
$$\bigl\|u-e_{\mathrm{inc}}\bigr\|_{L^2(B_R)}\le\frac{q}{1-q}\, \bigl\|e_{\mathrm{inc}}\bigr\|_{L^2(B_R)}.$$

(b) *First Born amplitude.* Under the same condition $q<1$, with
$f_B(\Omega):=-\frac1{4\pi}\int_{B_R}e^{ik(d-\Omega)\cdot y}V(y)\,dy$ one has,
uniformly in $\Omega\in S^2$,
$$\bigl|f_k(\Omega)-f_B(\Omega)\bigr|\le\frac{\|V\|_\infty|B_R|^{1/2}}{4\pi}\, \frac{q}{1-q}\,\bigl\|e_{\mathrm{inc}}\bigr\|_{L^2(B_R)}.$$

(c) *Scaling form.* For $V_\eta=\eta V$ with $|\eta|q<1$, put $K_{k,\eta}=\eta K_k$, $u_\eta=(I+\eta K_k)^{-1}e_{\mathrm{inc}}$, and define the corresponding amplitudes by the same integrals. Then
$$\|u_\eta-e_{\mathrm{inc}}\|_2\le\frac{|\eta|q}{1-|\eta|q}\|e_{\mathrm{inc}}\|_2,$$
$$\sup_{\Omega,d\in S^2}|f_{k,\eta}(\Omega;d)-\eta f_B(\Omega;d)|\le\frac{|\eta|^2\|V\|_\infty|B_R|q}{4\pi(1-|\eta|q)}.$$
This applies to every real $\eta$ in the original real stationary model. For complex $\eta$ the same Neumann construction and amplitude integrals give the same algebraic estimate, without asserting the real-potential flux conclusions. No base condition $q<1$ is needed in (c). These give controlled weak-coupling Born estimates in the actual operator norm, uniformly in both incident and outgoing directions.

## Facts & Assumptions

**Given:** the generic bounded compact real $V$, $R,k>0$, $d,\Omega\in S^2$, and $e_d(y)=e^{ikd\cdot y}$ with $\|e_d\|_2=|B_R|^{1/2}$.

[F1] The precise kernel and amplitude normalization are [[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]]; the actual all-$k$ inverse is [[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]]. The local CC finite-product kernel lemma is [[lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact]]. The concrete norm calculation uses [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-polar-coordinates-formula-for-lebesgue-measure]] and [[cor-cauchy-schwarz-inequality-for-l-two]]. Completeness and operator submultiplicativity are [[def-hilbert-space]], [[def-bounded-linear-operator]] and [[def-operator-norm]]. Only their CC contracts are used.

## Proof

1.1 The kernel $h_k(x,y)=\mathbf1_{B_R}(x)\mathbf1_{B_R}(y)e^{ik|x-y|}V(y)/(4\pi|x-y|)$ lies in $L^2(\mathbb R^6)$: polar integration of $|x-y|^{-2}$ over $|x-y|<2R$ gives $\|h_k\|_2^2\le\|V\|_\infty^2|B_R|R/(2\pi)$. The actual local kernel lemma supplies finite-product approximants with operator-norm error bounded by their kernel-$L^2$ error; zero extension and restriction give a bounded compact $K_k$ on $L^2(B_R)$ and finite $q=\|K_k\|$. This is a concrete Euclidean CC construction, with no arbitrary Hilbert–Schmidt basis. [given, F1, construct, algebra]

2.1 Suppose $q<1$. Define $S_Nf=\sum_{n=0}^N(-K_k)^nf$. For $M>N$, $\|(S_M-S_N)f\|_2\le q^{N+1}\|f\|_2/(1-q)$. Completeness defines the unique linear limit $Sf$, with $\|S\|\le(1-q)^{-1}$ and $\|S-S_N\|\le q^{N+1}/(1-q)$. The finite geometric identity $(I+K_k)S_N=S_N(I+K_k)=I-(-K_k)^{N+1}$ passes to the limit, so $S$ is the two-sided inverse. Consequently $u-e_d=\sum_{n\ge1}(-K_k)^ne_d$ and $\|u-e_d\|_2\le q\|e_d\|_2/(1-q)$, proving (a). [step 1.1, F1, construct, algebra]

3.1 The amplitude difference is $L_\Omega(u-e_d)$ for $L_\Omega(v)=-(4\pi)^{-1}\int_{B_R}e^{-ik\Omega\cdot y}V(y)v(y)dy$. Cauchy–Schwarz gives $|L_\Omega(v)|\le\|V\|_\infty|B_R|^{1/2}\|v\|_2/(4\pi)$ uniformly in $\Omega$. The absolute integrability follows from the same estimate. Inserting step 2.1 proves (b). Since $K_k$ is independent of $d$ and $\|e_d\|_2=|B_R|^{1/2}$, this is also uniform in $d$. No radial specialization occurs. [step 2.1, F1, given, algebra]

4.1 Linearity of the kernel gives $K_{k,\eta}=\eta K_k$ and $q_\eta=|\eta|q$. Repeat step 2.1 with this operator whenever $|\eta|q<1$, regardless of the base $q$. The amplitude functional is $L_{\eta,\Omega}=\eta L_\Omega$ and $f_{B,\eta}=\eta f_B$. Thus $f_{k,\eta}-\eta f_B=\eta L_\Omega(u_\eta-e_d)$; step 3.1 gives precisely both factors of $|\eta|$ in (c). The cases $q=0$ or $\eta=0$ follow from the same identities with zero error, without division by either. This proves the full claimed scaling and weak-coupling control. [step 2.1, step 3.1, algebra] ∎
