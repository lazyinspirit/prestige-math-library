---
id: def-qftx-n1-chiral-superfield
kind: definition
title: Four-dimensional $N=1$ chiral superfield on flat superspace
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-superspace-grassmann-algebra
  - lem-qftx-grassmann-coefficient-calculus
  - def-qftx-super-poincare-algebra-4d
  - def-complex-numbers-and-arithmetic
  - def-complex-conjugate-real-imaginary-part-and-modulus
justified_by: [lem-qftx-n1-chiral-superspace-identities]
dependency_roles:
  def-qftx-superspace-grassmann-algebra: mathematical-premise
  lem-qftx-grassmann-coefficient-calculus: mathematical-premise
  def-qftx-super-poincare-algebra-4d: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
dependency_level: 2
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§4.2–4.4, printed pp. 33–42, supersymmetry transformations, covariant derivatives, chiral coordinates and chiral multiplet expansion."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§3.4, printed pp. 83–85, covariant derivatives; §§3.5–3.6, printed pp. 89–96, chiral constraints and component expansions."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let $\mathcal A=\mathcal A_{\bar0}\oplus\mathcal A_{\bar1}$ be the finite-dimensional supercommutative complex coefficient algebra, and let $\Lambda_4$ have ordered generators $\theta^1,\theta^2,\bar\theta^{\dot1},\bar\theta^{\dot2}$ and the product, parity, derivatives and conjugation specified in the four-dimensional superspace Grassmann algebra. Let $\mathscr S=C^\infty(\mathbb R^{1,3},\mathcal A\otimes\Lambda_4)$ be the space of smooth coefficient functions; $\partial_\mu$ differentiates the real coordinate $x^\mu$ and acts trivially on the finite Grassmann basis. Use the mostly-plus metric and the matrices $\sigma^\mu_{\alpha\dot\alpha}$ specified by the four-dimensional super-Poincare algebra. A **chiral superfield** is an even element $\Phi\in\mathscr S$ satisfying the two equations

$$\bar D_{\dot\alpha}\Phi=0,\qquad \bar D_{\dot\alpha}:=-\partial^L_{\bar\theta^{\dot\alpha}}-i\sum_{\alpha,\mu}\theta^\alpha\sigma^\mu_{\alpha\dot\alpha}\partial_\mu,\quad \dot\alpha\in\{\dot1,\dot2\}.$$

Define the nilpotent coordinate shift $\Delta y^\mu=i\sum_{\alpha,\dot\alpha}\theta^\alpha\sigma^\mu_{\alpha\dot\alpha}\bar\theta^{\dot\alpha}$ and $y^\mu=x^\mu+\Delta y^\mu$. For a smooth coefficient function $f$, $f(y)$ means the finite Taylor substitution $\sum_{k=0}^{2}(\Delta y^{\mu_1}\cdots\Delta y^{\mu_k}/k!)\,\partial_{\mu_1}\cdots\partial_{\mu_k}f(x)$, with the $k=0$ term equal to $f(x)$ and repeated spacetime indices summed; higher terms vanish in $\Lambda_4$. The chiral components are the unique smooth coefficient functions $A,F\in C^\infty(\mathbb R^{1,3},\mathcal A_{\bar0})$ and $\psi_1,\psi_2\in C^\infty(\mathbb R^{1,3},\mathcal A_{\bar1})$ in

$$\Phi(y,\theta)=A(y)+\theta^1\psi_1(y)+\theta^2\psi_2(y)+\theta^1\theta^2F(y).$$

The total parity of every term is even. Define the remaining covariant derivatives by $D_\alpha=\partial^L_{\theta^\alpha}+i\sum_{\mu,\dot\alpha}\sigma^\mu_{\alpha\dot\alpha}\bar\theta^{\dot\alpha}\partial_\mu$. Define the supersymmetry generators on $\mathscr S$ by

$$Q_\alpha=\partial^L_{\theta^\alpha}-i\sum_{\mu,\dot\alpha}\sigma^\mu_{\alpha\dot\alpha}\bar\theta^{\dot\alpha}\partial_\mu,\qquad \bar Q_{\dot\alpha}=-\partial^L_{\bar\theta^{\dot\alpha}}+i\sum_{\mu,\alpha}\theta^\alpha\sigma^\mu_{\alpha\dot\alpha}\partial_\mu.$$

To specify external odd constant parameters, let $\mathcal E$ be a second copy of the four-generator exterior algebra, with ordered generators $\epsilon^1,\epsilon^2,\bar\epsilon^{\dot1},\bar\epsilon^{\dot2}$ and the same signed subset-basis multiplication as $\Lambda_4$. Equip it with the conjugate-linear, order-reversing involution $(\epsilon^\alpha)^*=-\bar\epsilon^{\dot\alpha}$ and $(\bar\epsilon^{\dot\alpha})^*=-\epsilon^\alpha$. The minus signs are the conjugation-compatible convention for parameters placed on the left: $\delta\theta^\alpha=\epsilon^\alpha$ and $\delta\bar\theta^{\dot\alpha}=-\bar\epsilon^{\dot\alpha}$ then respect $(\theta^\alpha)^*=\bar\theta^{\dot\alpha}$. The four generators remain independent over $\mathbb C$. Set $\mathcal A_\epsilon=\mathcal A\widehat\otimes\mathcal E$, where $\widehat\otimes$ denotes the graded tensor product: $(a\otimes u)(b\otimes v)=(-1)^{|u||b|}ab\otimes uv$ on homogeneous factors, with total parity and the order-reversing conjugation specified by the coefficient-algebra convention. This is again a finite-dimensional supercommutative coefficient algebra. Set $\mathscr S_\epsilon=C^\infty(\mathbb R^{1,3},\mathcal A_\epsilon\widehat\otimes\Lambda_4)$ and embed $\mathscr S$ into it by $a\mapsto a\otimes1$. The parameters commute with even elements and anticommute with odd elements of both $\mathcal A$ and $\Lambda_4$.

Extend the displayed coordinate derivatives to $\mathscr S_\epsilon$ by the same left-derivative rule, vanishing on $\mathcal A_\epsilon$; extend $Q_\alpha$ and $\bar Q_{\dot\alpha}$ by their displayed formulas. In particular, an odd derivative or supercharge acquires a minus sign when moved past an external odd parameter. Define the even complex-linear variation $\delta_{\epsilon,\bar\epsilon}:\mathscr S\to\mathscr S_\epsilon$ by

$$\delta_{\epsilon,\bar\epsilon}\Phi=\sum_\alpha\epsilon^\alpha Q_\alpha\Phi+\sum_{\dot\alpha}\bar\epsilon^{\dot\alpha}\bar Q_{\dot\alpha}\Phi.$$

For a chiral $\Phi$, the component transformation is the unique tuple $(\delta A,\delta\psi_1,\delta\psi_2,\delta F)$ of smooth $\mathcal A_\epsilon$-valued functions in the displayed $y,\theta$ expansion of $\delta_{\epsilon,\bar\epsilon}\Phi$, with $\delta A,\delta F$ even and $\delta\psi_\alpha$ odd. Chirality and uniqueness in this extended coefficient algebra are established by the local chiral-superspace identities. The same variation formula acts on $\mathscr S_\epsilon$ if repeated variations with these parameters are desired; adjoining further independent parameter copies uses the same graded tensor construction. The space of fields is classical and smooth: the coordinate differential operators act on all of $\mathscr S$, or all of $\mathscr S_\epsilon$ after scalar extension; no quantum-field operator domain or field equation is assumed. In natural units $[x^\mu]=-1$ and $[\theta]=[\bar\theta]=-\tfrac12$. If $[\Phi]=d$ is assigned, the formal component dimensions are $[A]=d$, $[\psi_\alpha]=d+\tfrac12$, and $[F]=d+1$; no value of $d$ is fixed. In the same natural-unit convention, $D_\alpha$, $\bar D_{\dot\alpha}$, $Q_\alpha$ and $\bar Q_{\dot\alpha}$ have mass dimension $+\tfrac12$, while $[\epsilon^\alpha]=[\bar\epsilon^{\dot\alpha}]=-\tfrac12$, so $\delta_{\epsilon,\bar\epsilon}$ is dimensionless.

## Definition references

[Martin, §§4.2–4.4](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §§3.4 and 3.6](https://arxiv.org/pdf/hep-th/0108200).

Four-dimensional $N=1$ superspace Grassmann algebra and Berezin integration: [[def-qftx-superspace-grassmann-algebra]].

Associativity and coefficient calculus for the finite superspace Grassmann algebra: [[lem-qftx-grassmann-coefficient-calculus]].

Four-dimensional real extended super-Poincare algebra: [[def-qftx-super-poincare-algebra-4d]].
