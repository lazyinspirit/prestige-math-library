---
id: cex-gr-flrw-static-matter-not-a-flat-solution
kind: counterexample
title: "A static flat matter datum satisfying the spatial-component and continuity equations but not the Friedmann equation"
status: published
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flrw-friedmann-system, def-derivative, thm-algebra-of-derivatives, def-real-order]
dependency_roles:
  def-gr-flrw-friedmann-system: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-real-order: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.20)-(8.23) and (8.35)-(8.36): the conservation equation and the two Friedmann equations, printed pp. 221-223 (PDF pp. 228-230)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.2: the Friedmann equation, the acceleration equation and the remark that the spatial equation alone does not determine the dynamics, printed pp. 201-203 (PDF pp. 208-210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Every Friedmann-system datum
$(c,G_N,\Lambda,I,k,a,\varepsilon,p)$ of [[def-gr-flrw-friedmann-system]]
with $k=0$, $\Lambda=0$, constant scale factor $a\equiv A$ for some $A>0$,
constant density $\varepsilon\equiv\varepsilon_0$ for some $\varepsilon_0>0$
and pressure $p\equiv0$ satisfies the Friedmann equation (F)."

## Facts & Assumptions

**Given:** Real constants $c>0$, $G_N>0$, $A>0$, $\varepsilon_0>0$; the interval $I:=\mathbb R$; the constant functions $a\equiv A$, $\varepsilon\equiv\varepsilon_0$, $p\equiv0$; and the equations (F), (A), (C), (S) of [[def-gr-flrw-friedmann-system]] with $k=\Lambda=0$.

[L1] The equations of [[def-gr-flrw-friedmann-system]] with $k=\Lambda=0$ read $H^2=\frac{8\pi G_N}{3c^2}\varepsilon$ for (F), $\frac{\ddot a}{a}=-\frac{4\pi G_N}{3c^2}(\varepsilon+3p)$ for (A), $\dot\varepsilon+3H(\varepsilon+p)=0$ for (C) and $-\frac{2a\ddot a+\dot a^2}{c^2}=\frac{8\pi G_N}{c^4}pa^2$ for (S), at every point of $I$.

[L2] The derivative of a constant function is $0$, and the sum, product and quotient rules for differentiable functions on an open interval hold ([[def-derivative]], [[thm-algebra-of-derivatives]]).

[L3] The real numbers form an ordered field; consequently the product and quotient of strictly positive real numbers is strictly positive, so $8\pi G_N\varepsilon_0/(3c^2)>0$ and $4\pi G_N\varepsilon_0/(3c^2)>0$ ([[def-real-order]]).

## Counterexample

1.1 (The datum and its derivatives.) Each of $a\equiv A$, $\varepsilon\equiv\varepsilon_0$, $p\equiv0$ is a constant function on $I=\mathbb R$, hence smooth, with $a$ taking values in $(0,\infty)$; thus $(c,G_N,0,I,0,a,\varepsilon,p)$ is a Friedmann-system datum of the kind named in the refuted statement. By [L2], $\dot a\equiv0$, $\ddot a\equiv0$, $\dot\varepsilon\equiv0$, so $H=\dot a/a\equiv0$. [L1, L2, algebra]

2.1 (The Friedmann equation fails.) By [L1] and step 1.1, the left-hand side of (F) is $H^2+kc^2/a^2=0$, while the right-hand side is $\frac{8\pi G_N}{3c^2}\varepsilon_0+\frac{\Lambda c^2}{3}=\frac{8\pi G_N\varepsilon_0}{3c^2}$, which is strictly positive by [L3]; hence $0=\frac{8\pi G_N\varepsilon_0}{3c^2}$ is false and (F) fails at every point of $I$. This refutes the displayed statement. [L1, L3, step 1.1, algebra]

2.2 (The acceleration equation fails and the other equations hold.) By [L1] and step 1.1, the left-hand side of (A) is $\ddot a/a=0$ while the right-hand side is $-\frac{4\pi G_N}{3c^2}\varepsilon_0<0$ by [L3], so (A) also fails. In contrast, (C) reads $\dot\varepsilon+3H(\varepsilon+p)=0+0=0$ and (S) reads $-0/c^2=0=8\pi G_N\cdot0\cdot a^2/c^4$, so both hold identically. Thus the spatial-component equation (S) and the continuity equation (C) do not by themselves imply the Friedmann equation, and (F) is not redundant in the pair (F), (S). [L1, L3, step 1.1, algebra]

3.1 (Conclusion.) The displayed universal statement is false: the flat static matter datum of step 1.1 has constant positive density and vanishing pressure and scale-factor velocity, and it satisfies (C) and (S) while failing (F) and (A) at every point. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **Consistency with the equivalence proposition.** The example does not contradict [[prop-gr-flrw-equation-equivalences]] clause (a), which assumes (F) and compares the pairs (F), (S) and (F), (A); here (F) fails, so that proposition does not apply. It shows that the hypothesis (F) in that equivalence cannot be dropped.

- **Scope.** The datum is a formal Friedmann-system example, not a claim about a physical configuration. The conclusions concern only the four scalar equations defined in [[def-gr-flrw-friedmann-system]]; no field law, observation, or physical model is asserted here.
