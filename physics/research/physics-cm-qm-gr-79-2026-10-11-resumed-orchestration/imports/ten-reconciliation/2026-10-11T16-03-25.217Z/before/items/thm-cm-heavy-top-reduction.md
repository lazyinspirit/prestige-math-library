---
id: thm-cm-heavy-top-reduction
kind: theorem
title: "Reduction of the heavy symmetric top system: conserved momenta, one-dimensional $\\theta$ equation and conserved reduced energy"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-cm-euler-angle-parametrization-and-heavy-top-system, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, def-derivative, def-interval]
dependency_roles:
  def-cm-euler-angle-parametrization-and-heavy-top-system: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.6, Eqs. (3.63)-(3.70), printed pp. 67-69: the two cyclic momenta $p_\\psi,p_\\phi$, the reduced energy $E'$ and the effective potential"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.5, Eqs. (4.78)-(4.85): reduced energy and effective potential of the symmetric top"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.10, Eqs. (2.89)-(2.91): the momenta $p_\\varphi,p_\\psi$ and the energy expressed through the effective potential"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Fix the parameters $A>0$, $C>0$, $m>0$, $d>0$, $g>0$ and let $q=(\varphi,\theta,\psi):I\to\mathbb R\times(0,\pi)\times\mathbb R$ be a heavy-top trajectory of [[def-cm-euler-angle-parametrization-and-heavy-top-system]] on an interval $I$ with at least two points; write $q'=(\varphi',\theta',\psi')$ for its derivative. Then:

1. the functions $t\mapsto b(t):=C\bigl(\psi'(t)+\varphi'(t)\cos\theta(t)\bigr)$ and $t\mapsto a(t):=A\varphi'(t)\sin^2\theta(t)+b(t)\cos\theta(t)$ are constant on $I$; write $b,a$ for their values;
2. consequently $\varphi'=\dfrac{a-b\cos\theta}{A\sin^2\theta}$ and $\psi'=\dfrac{b}{C}-\dfrac{(a-b\cos\theta)\cos\theta}{A\sin^2\theta}$ on $I$;
3. the **reduced energy**
$$E(t):=\tfrac12A\theta'(t)^2+\frac{(a-b\cos\theta(t))^2}{2A\sin^2\theta(t)}+\frac{b^2}{2C}+mgd\cos\theta(t)$$
is constant on $I$;
4. with the **effective potential** $U(\theta):=\dfrac{(a-b\cos\theta)^2}{2A\sin^2\theta}+\dfrac{b^2}{2C}+mgd\cos\theta$ on $(0,\pi)$, one has
$$A\theta''(t)=-U'\bigl(\theta(t)\bigr)\qquad(t\in I),$$
so that the angle $\theta$ alone obeys the one-dimensional second-order equation $A\theta''=-U'(\theta)$ with the constants $a,b$ determined by the initial data.

## Facts & Assumptions

**Given:** Parameters $A,C,m,d,g>0$, a heavy-top trajectory $q=(\varphi,\theta,\psi)$ on $I$ with $q'=(\varphi',\theta',\psi')$, and the partial derivatives of $L$ recorded in [[def-cm-euler-angle-parametrization-and-heavy-top-system]].

[L1] The system defining a heavy-top trajectory is $\frac{d}{dt}\partial_{\varphi'}L=0$, $\frac{d}{dt}\partial_{\theta'}L=\partial_\theta L$, $\frac{d}{dt}\partial_{\psi'}L=0$, with $\partial_{\varphi'}L=A\varphi'\sin^2\theta+C\cos\theta(\psi'+\varphi'\cos\theta)$, $\partial_{\theta'}L=A\theta'$, $\partial_{\psi'}L=C(\psi'+\varphi'\cos\theta)$ and $\partial_\theta L=A\varphi'^2\sin\theta\cos\theta-C(\psi'+\varphi'\cos\theta)\varphi'\sin\theta+mgd\sin\theta$ [[def-cm-euler-angle-parametrization-and-heavy-top-system]].

[L2] $\sin\theta>0$ for $\theta\in(0,\pi)$, and $\sin,\cos$ are differentiable with $(\sin)'=\cos$, $(\cos)'=-\sin$; $(\sin\theta(t))'=\cos\theta(t)\,\theta'(t)$ and $(\cos\theta(t))'=-\sin\theta(t)\,\theta'(t)$ [[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]].

[L3] Sum, product and quotient rules hold for differentiable real functions; differentiation is linear [[thm-algebra-of-derivatives]].

[L4] The derivative of $t\mapsto L(q(t),q'(t))$ is computed by the chain and product rules, and $L$ does not depend on $t$ explicitly other than through $(q(t),q'(t))$ [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-interval]].

## Proof

**Proof technique:** direct.

1.1 By the first and third equations of [L1], the functions $\partial_{\varphi'}L=A\varphi'\sin^2\theta+C\cos\theta(\psi'+\varphi'\cos\theta)$ and $\partial_{\psi'}L=C(\psi'+\varphi'\cos\theta)$ are constant on $I$; the second of these is $b$, and the first equals $A\varphi'\sin^2\theta+b\cos\theta=a$. Hence $a$ and $b$ are constants, which is clause 1. [given, L1]

1.2 Define $E(t):=\varphi'\partial_{\varphi'}L+\theta'\partial_{\theta'}L+\psi'\partial_{\psi'}L-L$ along the trajectory. By [L4] the derivative of $t\mapsto L(q(t),q'(t))$ is $\sum_i\partial_{q_i}L\,q_i'+\sum_i\partial_{q_i'}L\,q_i''$, and substituting the three system equations $\frac{d}{dt}\partial_{q_i'}L=\partial_{q_i}L$ of [L1] turns this into $\frac{d}{dt}\bigl(\sum_iq_i'\partial_{q_i'}L\bigr)$; hence $E'=0$, so $E$ is constant on $I$. [given, L1, L3, L4, algebra]

1.3 Compute $U'$: writing $N=(a-b\cos\theta)^2$ and $D=2A\sin^2\theta$, the quotient rule [L3] and [L2] give $\frac{d}{d\theta}\frac{N}{D}=\frac{N'D-ND'}{D^2}=\frac{4Ab\sin^3\theta(a-b\cos\theta)-4A\sin\theta\cos\theta(a-b\cos\theta)^2}{4A^2\sin^4\theta}$, which after factoring $(a-b\cos\theta)/(A\sin^3\theta)$ is $\frac{a-b\cos\theta}{A\sin^3\theta}\bigl(b\sin^2\theta-\cos\theta(a-b\cos\theta)\bigr)$; and the remaining terms contribute $-mgd\sin\theta$, so $U'(\theta)=\frac{a-b\cos\theta}{A\sin^3\theta}\bigl(b\sin^2\theta-\cos\theta(a-b\cos\theta)\bigr)-mgd\sin\theta$. [given, L2, L3, algebra]

2.1 Solving the two defining identities: $b=C(\psi'+\varphi'\cos\theta)$ gives $\psi'=b/C-\varphi'\cos\theta$, and $a=A\varphi'\sin^2\theta+b\cos\theta$ gives $\varphi'=(a-b\cos\theta)/(A\sin^2\theta)$ because $\sin\theta>0$ by [L2]; substituting the second into the first gives the displayed formula for $\psi'$. This is clause 2. [step 1.1, given, L2, L3, algebra]

2.2 Evaluating $E$ with the partial derivatives of [L1] and $L$ of the definition gives $$E=\tfrac12A\theta'^2+\tfrac12A\varphi'^2\sin^2\theta+\tfrac12C(\psi'+\varphi'\cos\theta)^2+mgd\cos\theta,$$ the cross terms cancelling after collecting $\varphi'\bigl(A\varphi'\sin^2\theta+C\cos\theta(\psi'+\varphi'\cos\theta)\bigr)+\psi'C(\psi'+\varphi'\cos\theta)-\tfrac12C(\psi'+\varphi'\cos\theta)^2=\tfrac12C(\psi'+\varphi'\cos\theta)^2$ and the analogous axial term; substituting $\varphi'=(a-b\cos\theta)/(A\sin^2\theta)$ and $\psi'+\varphi'\cos\theta=b/C$ from steps 1.1 and 2.1 gives the displayed formula for $E$. Since $E$ is constant by step 1.2, this is clause 3. [step 1.1, 2.1, 1.2, given, L1, L3, algebra]

3.1 Substituting $a-b\cos\theta=A\varphi'\sin^2\theta$ from step 2.1 into the first term of step 1.3 gives $U'(\theta)=\varphi'\sin\theta\bigl(b-A\varphi'\cos\theta\bigr)-mgd\sin\theta$, hence $-U'(\theta)=A\varphi'^2\sin\theta\cos\theta-b\varphi'\sin\theta+mgd\sin\theta$; by step 1.1 and the identity $\partial_\theta L=A\varphi'^2\sin\theta\cos\theta-C(\psi'+\varphi'\cos\theta)\varphi'\sin\theta+mgd\sin\theta$ of [L1] with $C(\psi'+\varphi'\cos\theta)=b$, the right-hand side equals $\partial_\theta L$. Since the second system equation reads $\frac{d}{dt}(A\theta')=\partial_\theta L$ and $\frac{d}{dt}(A\theta')=A\theta''$, we obtain $A\theta''=-U'(\theta)$ on $I$, which is clause 4. [step 1.1, 2.1, 1.3, given, L1, L3, algebra] ∎
