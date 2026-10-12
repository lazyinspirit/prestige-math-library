---
id: ex-gr-flrw-flat-power-law-check
kind: example
title: "Direct check of the flat power-law data against the Friedmann-system
  equations"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  [
    def-gr-flrw-friedmann-system,
    def-real-power,
    thm-real-power-continuity-and-derivatives,
    def-derivative,
    thm-algebra-of-derivatives,
    thm-chain-rule,
    lem-derivative-of-a-power,
    thm-real-power-laws
  ]
dependency_roles:
  def-gr-flrw-friedmann-system: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-real-power-laws: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.21)-(8.23), (8.49) and (8.53):
        the equation of state p = w rho, the density scaling and the flat dust
        and radiation power laws, printed pp. 221-222, 226-227 (PDF pp. 228-229,
        233-234)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), section 4.6.2: the flat single-fluid power-law
        solutions and the dust and radiation exponents, printed p. 203 (PDF p.
        210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Fix real constants $c>0$, $G_N>0$, $A>0$, $t_*>0$, $t_0\in\mathbb R$ and
$w>-1$, and put

$$q:=\frac{2}{3(1+w)},\qquad I:=(t_0,\infty),\qquad a(t):=A\Bigl(\frac{t-t_0}{t_*}\Bigr)^{q},\qquad \varepsilon(t):=\frac{3c^2q^2}{8\pi G_N\,(t-t_0)^2},\qquad p(t):=w\,\varepsilon(t),$$

with real powers in the sense of [[def-real-power]]. Then:

1. The functions $a,\varepsilon,p$ are smooth on $I$, $a(t)>0$ and
   $\varepsilon(t)>0$ for every $t\in I$, and on $I$

$$H(t)=\frac{q}{t-t_0},\qquad \frac{\ddot a(t)}{a(t)}=\frac{q(q-1)}{(t-t_0)^2}.$$

2. The Friedmann-system datum $(c,G_N,0,I,0,a,\varepsilon,p)$ satisfies the
   Friedmann equation (F), the acceleration equation (A), the continuity
   equation (C) and the spatial-component equation (S) of
   [[def-gr-flrw-friedmann-system]] on $I$. In particular $w=0$ gives
   $q=\tfrac23$ and $w=\tfrac13$ gives $q=\tfrac12$.

## Facts & Assumptions

**Given:** The constants $c,G_N,A,t_*,t_0,w$ with $c>0$, $G_N>0$, $A>0$, $t_*>0$, $w>-1$, the interval $I=(t_0,\infty)$, the functions $a,\varepsilon,p$ of the example, and the equations (F), (A), (C), (S) of [[def-gr-flrw-friedmann-system]].

[L1] For $x>0$ and real $\alpha$ the real power $x^\alpha=\exp(\alpha\log x)$ is smooth and strictly positive on $(0,\infty)$ with $(x^\alpha)'=\alpha x^{\alpha-1}$, and $(x^\alpha)^\beta=x^{\alpha\beta}$ for real $\beta$ ([[def-real-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-real-power-laws]]).

[L2] Smooth functions on intervals satisfy the sum, product, quotient and chain rules; in particular, if $u$ is smooth and strictly positive and $\alpha$ is real, then $\frac{d}{dt}u^\alpha=\alpha u^{\alpha-1}\dot u$, and the derivative of a constant function is $0$ ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-derivative]], [[lem-derivative-of-a-power]]).

[L3] The equations of [[def-gr-flrw-friedmann-system]] with $k=\Lambda=0$ read

$$H^2=\frac{8\pi G_N}{3c^2}\varepsilon,\qquad \frac{\ddot a}{a}=-\frac{4\pi G_N}{3c^2}(\varepsilon+3p),\qquad \dot\varepsilon+3H(\varepsilon+p)=0,\qquad -\frac{2a\ddot a+\dot a^2}{c^2}=\frac{8\pi G_N}{c^4}\,p\,a^2,$$

where the first display is (F), the second (A), the third (C) and the fourth (S), each required at every point of $I$.

[L4] The defining relations $q=2/(3(1+w))$ and $w>-1$ give $q>0$ and $3(1+w)q=2$; equivalently $1+w=2/(3q)$ and $3q(1+w)=2$.



## Verification
1.1 (Smoothness and positivity.) The function $u(t):=(t-t_0)/t_*$ is smooth and strictly positive on $I$ because $t-t_0>0$ and $t_*>0$. By [L1] the function $a=A\,u^q$ is smooth and strictly positive on $I$, and $\varepsilon(t)=3c^2q^2/(8\pi G_N)\cdot(t-t_0)^{-2}$ is smooth and strictly positive because $t-t_0>0$; $p=w\varepsilon$ is smooth as a constant multiple. [L1, L2, given, algebra]

2.1 (Derivatives and the Hubble parameter.) By [L2], $\dot u=1/t_*$ and $\dot a=Aq\,u^{q-1}\dot u=Aq\,u^{q-1}/t_*$. Since $u^q/(t-t_0)=u^{q-1}/t_*$, this is $\dot a=q\,a/(t-t_0)$, so $H=\dot a/a=q/(t-t_0)$. Differentiating $\dot a=qa/(t-t_0)$ by the product and quotient rules gives $\ddot a=q\bigl(\dot a(t-t_0)-a\bigr)/(t-t_0)^2=q(q-1)a/(t-t_0)^2$, hence $\ddot a/a=q(q-1)/(t-t_0)^2$. Also $\dot\varepsilon=-6c^2q^2/(8\pi G_N(t-t_0)^3)=-2\varepsilon/(t-t_0)$. This proves claim 1. [L1, L2, step 1.1, algebra]

3.1 (Friedmann equation.) By [L3], (F) with $k=0$ is $H^2=8\pi G_N\varepsilon/(3c^2)$. By step 2.1, $H^2=q^2/(t-t_0)^2$; by the definition of $\varepsilon$, $\frac{8\pi G_N}{3c^2}\varepsilon=\frac{8\pi G_N}{3c^2}\cdot\frac{3c^2q^2}{8\pi G_N(t-t_0)^2}=\frac{q^2}{(t-t_0)^2}$. The two sides agree at every point of $I$. [L3, step 2.1, algebra]

3.2 (Acceleration equation.) By [L3], (A) with $\Lambda=0$ is $\ddot a/a=-4\pi G_N(\varepsilon+3p)/(3c^2)$. By step 2.1 and $p=w\varepsilon$, the left-hand side is $q(q-1)/(t-t_0)^2$ and the right-hand side is $-\frac{4\pi G_N}{3c^2}(1+3w)\frac{3c^2q^2}{8\pi G_N(t-t_0)^2}=-\frac{(1+3w)q^2}{2(t-t_0)^2}$. Since $q>0$ by [L4], the needed identity $q(q-1)=-\tfrac12(1+3w)q^2$ is equivalent to $2q-2=-(1+3w)q$, that is, to $3(1+w)q=2$, which is [L4]. Hence (A) holds. [L3, L4, step 2.1, algebra]

3.3 (Continuity equation.) By step 2.1, $\dot\varepsilon=-2\varepsilon/(t-t_0)$; by steps 2.1 and [L4], $3H(\varepsilon+p)=3\frac{q}{t-t_0}(1+w)\varepsilon$ and $3q(1+w)=2$, so $3H(\varepsilon+p)=2\varepsilon/(t-t_0)$. Hence $\dot\varepsilon+3H(\varepsilon+p)=0$ on $I$, which is (C). [L3, L4, step 2.1, algebra]

3.4 (Spatial-component equation.) By [L3], (S) with $k=\Lambda=0$ is $-(2a\ddot a+\dot a^2)/c^2=8\pi G_N\,p\,a^2/c^4$. By step 2.1, $2a\ddot a+\dot a^2=\bigl(2q(q-1)+q^2\bigr)a^2/(t-t_0)^2=(3q^2-2q)a^2/(t-t_0)^2$; the right-hand side is $\frac{8\pi G_N}{c^4}w\frac{3c^2q^2}{8\pi G_N(t-t_0)^2}a^2=\frac{3wq^2a^2}{c^2(t-t_0)^2}$. Equality of the two displayed expressions is equivalent to $-(3q^2-2q)=3wq^2$, that is, to $2q=3q^2(1+w)$, which holds because $3q(1+w)=2$ by [L4]; hence (S) holds. [L3, L4, step 2.1, algebra]

4.1 (Conclusion.) Steps 1.1 and 2.1 establish claim 1, and steps 3.1, 3.2, 3.3 and 3.4 establish (F), (A), (C) and (S) at every point of $I$, which is claim 2; the last sentence of claim 2 is the substitution $w=0$, $w=\tfrac13$ in $q=2/(3(1+w))$. No equation of state beyond $p=w\varepsilon$, no field equation and no physical premise was used. [step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, step 3.4] ∎



## Remarks
- **What is checked.** The example verifies the displayed data against all
  four scalar equations of [[def-gr-flrw-friedmann-system]] by direct
  differentiation; in particular it does not invoke the equivalence
  proposition of the A page, so it independently exhibits data satisfying
  (F), (A), (C) and (S) simultaneously. The physically interpreted
  field-equation reading of these data belongs to the physics theorem on the A
  page and is not asserted here.

- **What is not claimed.** No uniqueness, no statement about the limit
  $t\downarrow t_0$, no extension beyond $I$ and no numerical value of any
  constant is asserted; $A$, $t_*$ and $t_0$ are arbitrary real model data
  with $A>0$, $t_*>0$.
