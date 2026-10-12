---
id: ex-cm-adiabatic-drift-check
kind: example
title: "An exactly solvable adiabatic branch: $K=I+\\varepsilon I\\cos\\theta$ and comparison with the drift bound"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-adiabatic-invariant-drift-bound, def-cm-parameter-dependent-action-angle-branch, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, def-interval]
dependency_roles:
  thm-cm-adiabatic-invariant-drift-bound: mathematical-premise
  def-cm-parameter-dependent-action-angle-branch: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 10 Sections 10.2-10.3, Eqs. (10.28)-(10.42): action variable and adiabatic invariance, printed pages 5-8 of Chapter 10 (PDF pages 241-244)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 4.6, Eqs. (4.150)-(4.158): the action $I=\\frac1{2\\pi}\\oint p\\,dq$ and the averaged invariance statement, printed pages 113-115"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Take $J=\mathbb R$, $S=\mathbb R$, $h(I,s)=I$ and $k(I,\theta,s)=I\cos\theta$ in the datum of [[def-cm-parameter-dependent-action-angle-branch]], with $\varepsilon=\tfrac1{10}$, $A=2$, $\omega_0=1$, $K=[6/5,19/10]$, $S_0=[0,2]$, $s_0=0$ and initial datum $I(0)=3/2$, $\theta(0)=0$. The branch system is

$$I'=\varepsilon I\sin\theta,\qquad \theta'=1+\varepsilon\cos\theta,\qquad s'=\varepsilon,$$

so $s(t)=\varepsilon t$ stays in $S_0=[0,2]$ on $[0,A/\varepsilon]=[0,20]$, and $I(t)$ stays in $K$ for all $t\ge0$. The quantity $J:=I(1+\varepsilon\cos\theta)$ is exactly invariant, the solution stays in $K\times S_0$ on $[0,A/\varepsilon]$, and

$$|I(t)-I(0)|\le\tfrac13\qquad(t\ge0),$$

while the drift bound of [[thm-cm-adiabatic-invariant-drift-bound]] evaluates in this instance to $|I(t)-I(0)|\le\tfrac{19}{50}$.

## Facts & Assumptions

**Given:** The datum $h(I,s)=I$, $k(I,\theta,s)=I\cos\theta$, $\varepsilon=1/10$, and the sets and data above.

[L1] The branch vector field is $I'=-\varepsilon\partial_\theta k$, $\theta'=\partial_Ih+\varepsilon\partial_Ik$, $s'=\varepsilon$; here $\partial_Ih=1$, $\partial_\theta k=-I\sin\theta$ and $\partial_Ik=\cos\theta$, so the field is as displayed ([[def-cm-parameter-dependent-action-angle-branch]]). [given]

[L2] The drift bound ([[thm-cm-adiabatic-invariant-drift-bound]]): if $|\partial_Ih|\ge\omega_0$ and the branch solution stays in the compact sets $K\times S_0$, then $$|I(t)-I(0)|\le\varepsilon\Bigl[2\sup_{K\times[0,2\pi]\times S_0}|g|+A\sup_{K\times[0,2\pi]\times S_0}\bigl|\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg\bigr|\Bigr],$$ where $g=(k-\langle k\rangle)/\partial_Ih$ and $\langle k\rangle$ is the $\theta$-average of $k$. [given]

[L3] $(\sin\theta)'=\cos\theta$ and $(\cos\theta)'=-\sin\theta$, and derivatives of sums and products follow the algebra of derivatives and the chain rule. [thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives]

## Verification

**Proof technique:** direct; exhibit an exact invariant of the branch system, check the trapping, and evaluate the theorem's constant.

1.1 By [L1] the branch system is $I'=\tfrac1{10}I\sin\theta$, $\theta'=1+\tfrac1{10}\cos\theta$, $s'=\tfrac1{10}$. Put $J(t):=I(t)(1+\tfrac1{10}\cos\theta(t))$. By [L3], $$J'=\tfrac1{10}I\sin\theta\,(1+\tfrac1{10}\cos\theta)+I\,(-\tfrac1{10}\sin\theta)(1+\tfrac1{10}\cos\theta)=0,$$ so $J$ is constant; with $I(0)=3/2$, $\theta(0)=0$ we get $J\equiv\tfrac{33}{20}$. [given, L1, L3, algebra]

2.1 Trapping: since $9/10\le1+\tfrac1{10}\cos\theta\le11/10$ for every $\theta$, the identity $I(t)=\tfrac{33}{20}/(1+\tfrac1{10}\cos\theta(t))$ gives $I(t)\ge\tfrac{33}{20}\cdot\tfrac{10}{11}=\tfrac32>\tfrac65$ and $I(t)\le\tfrac{33}{20}\cdot\tfrac{10}{9}=\tfrac{11}{6}<\tfrac{19}{10}$ for every $t\ge0$ for which the solution is defined, so the $I$-coordinate stays in $K$; moreover $s(t)=\tfrac{t}{10}\in S_0$ exactly for $0\le t\le20=A/\varepsilon$, so the solution stays in $K\times S_0$ on $[0,A/\varepsilon]$. Global existence: on the maximal forward interval, $\theta(0)=0$ with $\theta'(t)=1+\tfrac1{10}\cos\theta(t)\in[9/10,11/10]$ gives $0\le\theta(t)\le\tfrac{11}{10}t$, and $s(t)=\tfrac{t}{10}$ by $s'=1/10$; if that interval had finite endpoint $\omega$, the graph over $[0,\omega)$ would lie in the compact set $K\times[0,\tfrac{11}{10}\omega]\times[0,\omega/10]\subseteq\mathbb R^3$, and compact trapping would extend the solution past $\omega$, a contradiction; hence the maximal solution is defined on $[0,\infty)$ and, by step 1.1, stays in $K$. The bound of [L2] therefore applies on the horizon $[0,A/\varepsilon]$. [step 1.1, given, algebra]

3.1 Evaluate the theorem's constant: $\langle k\rangle(I,s)=\frac1{2\pi}\int_0^{2\pi}I\cos\theta\,d\theta=0$, so $g=I\cos\theta$ and $\sup_{K\times[0,2\pi]\times S_0}|g|=\tfrac{19}{10}$. Moreover $\partial_Ig=\cos\theta$, $\partial_\theta g=-I\sin\theta$, $\partial_sg=0$, and with $\partial_\theta k=-I\sin\theta$, $\partial_Ik=\cos\theta$ one has $\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg=-I\cos\theta\sin\theta+I\sin\theta\cos\theta=0$. The theorem thus gives $|I(t)-I(0)|\le\tfrac1{10}\cdot2\cdot\tfrac{19}{10}=\tfrac{19}{50}$, while the exact invariant gives $$|I(t)-I(0)|=\tfrac1{10}\cdot\tfrac32\,\frac{|\cos\theta(0)-\cos\theta(t)|}{1+\tfrac1{10}\cos\theta(t)}\le\tfrac1{10}\cdot\tfrac32\cdot\frac{2}{9/10}=\frac13,$$ consistent with the bound. [step 1.1, step 2.1, L2, algebra] ∎
