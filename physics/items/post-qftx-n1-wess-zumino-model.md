---
id: post-qftx-n1-wess-zumino-model
kind: postulate
title: Rigid four-dimensional $N=1$ Wess–Zumino sigma-model action
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
deps:
  - def-qftx-physical-superspace-normalization
  - def-qftx-n1-chiral-superfield
  - def-qftx-superspace-grassmann-algebra
  - def-qftx-n1-kahler-target-data
dependency_roles:
  def-qftx-physical-superspace-normalization: formulation-prerequisite
  def-qftx-n1-chiral-superfield: formulation-prerequisite
  def-qftx-superspace-grassmann-algebra: formulation-prerequisite
  def-qftx-n1-kahler-target-data: formulation-prerequisite
physical_scope: "An adopted classical rigid N=1 superspace model on flat four-dimensional Minkowski spacetime, with a finite set of chiral multiplets on one specified Kähler coordinate patch and compactly supported component fields. It asserts no gauge interaction, supergravity, quantum measure, continuum quantum theory, or empirical result."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§3.1–3.2 and 4.7, printed pp. 18–24 and 41–42: off-shell chiral multiplets, chiral interactions, and the Wess–Zumino superspace action."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§4.3 and §7.1, printed pp. 21–22 and 43–46, especially equations (7.4)–(7.9): superspace total-derivative invariance, the finite nilpotent Taylor expansions, and Kähler sigma-model actions."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Postulate

Use the physical action brackets $[U]_D=-I_D(U)/4$ and $[Y]_F=I_F(Y)/2$ from Physical superspace action brackets and canonical chiral components, with raw mathematical coefficient integrals $I_D,I_F$ unchanged. Physical chiral components obey $\psi_{\mathrm{raw}}=\sqrt2\psi$ and $F_{\mathrm{raw}}=2F$. All physical action and coupling formulas below use these brackets and physical component names; adding Hermitian conjugation applies only to the F action and occurs once.

Use oriented and time-oriented Minkowski spacetime $M=\mathbb R^{1,3}$ with coordinates $x^0,x^1,x^2,x^3$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, and natural units $\hbar=c=1$. Let $n\geq1$, let $U\subseteq\mathbb C^n$ be an open set containing $0$, let $K:U\to\mathbb R$ be smooth, and require the Hermitian matrix $g_{i\bar j}(z,\bar z)=\partial_i\partial_{\bar j}K(z,\bar z)$ to be positive definite at every point of $U$. Let $W:U\to\mathbb C$ be smooth and holomorphic, where holomorphic means $\partial_{\bar i}W=0$ for every $i$, using the Wirtinger derivatives of the Kähler coordinate-patch definition; write $W_i=\partial_iW$. These data specify the Kähler coordinate patch and holomorphic superpotential of the model.

For these classical fields, take a finite-dimensional exterior algebra $\mathcal G$ over $\mathbb C$ on ordered odd generators $\zeta_1,\ldots,\zeta_m$ for $m\geq0$, with componentwise complex addition and multiplication modulo $\zeta_a^2=0$ and $\zeta_a\zeta_b=-\zeta_b\zeta_a$. Give it the conjugate-linear operation $(c\zeta_{i_1}\cdots\zeta_{i_r})^*=\bar c\zeta_{i_r}\cdots\zeta_{i_1}$, so $\zeta_a^*=\zeta_a$, $(uv)^*=v^*u^*$ and $(u^*)^*=u$. Reversing twice proves involutivity, and reversing the defining relations preserves them; thus this is a well-defined parity-preserving anti-automorphism. Write $\mathcal G_{\bar0},\mathcal G_{\bar1}$ for its even and odd subspaces, and use its degree-zero projection $b:\mathcal G\to\mathbb C$. Form the graded tensor product $\mathcal B=\mathcal G\otimes_{\mathbb C}\Lambda_4$ with the superspace Grassmann algebra, and let $\mathfrak J$ be the ideal of elements with zero total degree-zero part. Then $\mathfrak J^{m+5}=0$. For an even superfield $\Phi^i$, its body is its image under the augmentation $\mathcal B\to\mathbb C$ that applies $b$ and sends all superspace generators to zero; denote that ordinary scalar component by $\phi^i(x)$. Write $\bar\Phi^{\bar i}=(\Phi^i)^*$, $\nu^i=\Phi^i-\phi^i$, and $\bar\nu^{\bar i}=\bar\Phi^{\bar i}-\bar\phi^{\bar i}$; these differences lie in $\mathfrak J$. Define the smooth function's value on the full superfields by the finite nilpotent Taylor convention

$$K(\bar\Phi,\Phi):=\sum_{\substack{\alpha,\beta\in\mathbb N^n\\|\alpha|+|\beta|\leq m+4}}\frac{(\partial_z^\alpha\partial_{\bar z}^\beta K)(\phi,\bar\phi)}{\alpha!\,\beta!}(\nu)^\alpha(\bar\nu)^\beta,$$

where $\alpha!=\prod_i\alpha_i!$, $\beta!=\prod_i\beta_i!$, $\nu^\alpha=\prod_i(\nu^i)^{\alpha_i}$, $(\bar\nu)^\beta=\prod_i(\bar\nu^{\bar i})^{\beta_i}$, $\partial_z^\alpha=\prod_i\partial_i^{\alpha_i}$, $\partial_{\bar z}^\beta=\prod_i\partial_{\bar i}^{\beta_i}$, and the coefficient derivatives are evaluated at $(\phi(x),\bar\phi(x))$. Define the holomorphic superfield evaluation and its derivatives by the finite Taylor rule at the scalar body,

$$W(\Phi)(x,\theta,\bar\theta):=\sum_{|\alpha|\leq m+4}\frac{(\partial_z^\alpha W)(\phi(x))}{\alpha!}(\nu)^\alpha,\qquad W_i(\Phi):=\sum_{|\alpha|\leq m+4}\frac{(\partial_z^\alpha\partial_iW)(\phi(x))}{\alpha!}(\nu)^\alpha.$$

All terms beyond these finite sums vanish because $\mathfrak J^{m+5}=0$; the rule for $K$ is the Taylor extension of a smooth real function in its $z,\bar z$ variables, and the rule for $W$ uses only its holomorphic Wirtinger derivatives.

For each $i=1,\ldots,n$, the full formal physical components are smooth maps $a^i,\mathcal F^i:M\to\mathcal G_{\bar0}$ and $\psi^i_\alpha:M\to\mathcal G_{\bar1}$, with compact support in spacetime $M$: equivalently each coefficient of each exterior-basis monomial is a compactly supported smooth complex function of $x$. Require the scalar body $\phi^i=b(a^i)$ to lie in $U$ jointly. The lowest chiral coefficient is $a^i$, not merely its body $\phi^i$; it may have even nilpotent terms. In the physical normalization definition instantiate its scalar and auxiliary component symbols by $a^i$ and $\mathcal F^i$, respectively:

$$\Phi^i(y,\theta)=a^i(y)+\sqrt2\theta^\alpha\psi^i_\alpha(y)+2\theta^1\theta^2\mathcal F^i(y),\qquad y=x+i\theta\sigma\bar\theta.$$

Barred component fields mean the specified coefficient involution, so $\bar a^{\bar i}=(a^i)^*$ and $\overline{\mathcal F}^{\bar i}=(\mathcal F^i)^*$; barred fermions are likewise the conjugates of the coefficient maps. On $\mathcal B$ use the supplier's graded-tensor involution, including $\theta^*=\bar\theta$ and reversal of all factors. The formal action has values in the even fixed real subspace of $\mathcal G$; no order or nonnegativity is assigned to nilpotent elements.

The supersymmetry parameters $\epsilon^\alpha,\bar\epsilon^{\dot\alpha}$ are constant odd coefficients, in $\mathcal G$ or a finite exterior extension equipped with the same involution. The adopted variation is $\delta\Phi^i=(\epsilon^\alpha Q_\alpha+\bar\epsilon^{\dot\alpha}\bar Q_{\dot\alpha})\Phi^i$ with the chiral-superfield supercharges. Formal parameter components may be treated independently for the algebraic identities; a conjugation-preserving variation in this left-parameter convention has $\bar\epsilon^{\dot\alpha}=-(\epsilon^\alpha)^*$ and $\delta\bar\Phi=(\delta\Phi)^*$. Indeed $\delta\theta=\epsilon$ and $\delta\bar\theta=-\bar\epsilon$ then commute with the chosen involution. The full even coefficient spaces for $a$ and $\mathcal F$ are retained under these transformations; the ordinary bosonic slice below need not be invariant. The engineering dimensions are $[x^\mu]=-1$, $[\theta]=[\bar\theta]=-1/2$, $[a^i]=1$, $[\psi^i]=3/2$, $[\mathcal F^i]=2$, $[K]=2$, and $[W]=3$ in mass units.

Adopt the classical action

$$S_{\mathrm{WZ}}=\int_M d^4x\left([K(\bar\Phi,\Phi)]_D+[W(\Phi)]_F+\mathrm{h.c.}\right),$$

where only the chiral F action has a Hermitian-conjugate partner and the D bracket is real; both physical brackets are the fixed multiples of the earlier raw ordered measures. The **ordinary bosonic sector** is the restriction $\psi=0$, $a=\phi\in\mathbb C^n$ and $\mathcal F=F\in\mathbb C^n$ with all positive-degree coefficient-algebra components set to zero; $\phi:M\to U$ and $F:M\to\mathbb C^n$ remain smooth and compactly supported in $M$. Thus taking this sector commutes with the degree-zero augmentation, but it is a restriction for evaluating a bosonic action, not an assertion of off-shell supersymmetry closure on a purely complex field space. The component conversion below gives its complete bosonic Lagrangian, up to the displayed spacetime divergence,

$$\mathcal L_{\mathrm{bos}}=-g_{i\bar j}(\phi,\bar\phi)\eta^{\mu\nu}\partial_\mu\phi^i\partial_\nu\bar\phi^{\bar j}+g_{i\bar j}(\phi,\bar\phi)F^i\bar F^{\bar j}+F^iW_i(\phi)+\bar F^{\bar j}\overline{W_j(\phi)}+\tfrac14\Box K(\phi,\bar\phi),\qquad\Box=\eta^{\mu\nu}\partial_\mu\partial_\nu.$$

Its bosonic zero-derivative auxiliary terms are therefore precisely

$$\mathcal L_F=g_{i\bar j}(\phi,\bar\phi)F^i\bar F^{\bar j}+F^iW_i(\phi)+\bar F^{\bar j}\overline{W_j(\phi)}.$$

Only this ordinary complex sector is used for the ordered real scalar-potential and minimization conclusions. An arbitrary even $\mathcal G$-valued auxiliary field remains valid in the full formal model, but is not a vector in an ordered positive-definite complex metric space.

The canonical Wess–Zumino model is the special case $U=\mathbb C^n$, $K(z,\bar z)=\sum_i\bar z^{\bar i}z^i$, and hence $g_{i\bar j}=\delta_{i\bar j}$. This is an adopted classical formulation and normalization, not a deduction that nature realizes the model.

## Postulate references

[Stephen P. Martin, *A Supersymmetry Primer*, §§3.1–3.2 and 4.7](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §4.3 and §7.1](https://arxiv.org/pdf/hep-th/0101055).

[[def-qftx-n1-chiral-superfield]]

[[def-qftx-superspace-grassmann-algebra]]

[[def-qftx-n1-kahler-target-data]]

[[def-qftx-physical-superspace-normalization]]


## Component conversion in the fixed ordered convention

This finite formula specifies the complete off-shell component action, including fermionic and derivative terms, without identifying our raw measures with differently ordered textbook measures. Write $h^\mu=i\theta^\alpha\sigma^\mu_{\alpha\dot\alpha}\bar\theta^{\dot\alpha}$, and use $\mathcal C(P)$ for the coefficient of $\theta^1\theta^2\bar\theta^{\dot1}\bar\theta^{\dot2}$ in a polynomial $P$ with coefficients on the left, using the earlier signed subset multiplication. Evaluation of any derivative of $K$ or $W$ at the even coefficient $a$ means its finite Taylor extension at $b(a)$, as in the Postulate. Define the following explicit polynomials in the component maps and their spacetime derivatives:

$$d^i=\sqrt2\theta^\alpha\psi^i_\alpha+2\theta^1\theta^2\mathcal F^i+h^\mu\partial_\mu a^i+\sqrt2 h^\mu\theta^\alpha\partial_\mu\psi^i_\alpha+\tfrac12h^\mu h^\nu\partial_\mu\partial_\nu a^i,\qquad \bar d^{\bar i}=(d^i)^*.$$

The finite Taylor shift $e^{h^\mu\partial_\mu}$ of the chiral component expansion gives exactly $\Phi^i=a^i+d^i$ and $\bar\Phi^{\bar i}=\bar a^{\bar i}+\bar d^{\bar i}$. The shift of $\theta^1\theta^2\mathcal F$ vanishes because it contains three undotted generators; its action on $\theta\psi$ stops after one shift. Every monomial in $d$ has at least one undotted generator and every monomial in $\bar d$ at least one dotted generator, so a product of three $d$ factors or of three $\bar d$ factors vanishes. With empty products equal to one, the complete D-component density is the explicit finite component expression

$$\mathcal L_D=-\frac14\sum_{r,s=0}^{2}\frac{K_{i_1\cdots i_r\bar j_1\cdots\bar j_s}(a,\bar a)}{r!s!}\,\mathcal C\!\left(d^{i_1}\cdots d^{i_r}\bar d^{\bar j_1}\cdots\bar d^{\bar j_s}\right).$$

Here repeated indices range from $1$ to $n$, and $K_{i_1\cdots i_r\bar j_1\cdots\bar j_s}=\partial_{i_1}\cdots\partial_{i_r}\partial_{\bar j_1}\cdots\partial_{\bar j_s}K$. Together with the displayed $d$, this is a finite sum solely of component fields and their derivatives: the fixed sixteen-element subset table computes each $\mathcal C$ by addition and multiplication in $\mathcal G$. It includes all two-fermion, four-fermion and derivative terms, rather than retaining only the auxiliary truncation. No unspecified superfield or superspace integration remains in this component prescription.

The chiral F-component can be expanded completely in two undotted generators. Products of the two linear odd terms give coefficient $-2\psi^i_1\psi^j_2$ after contraction with the symmetric $W_{ij}$. Thus, with $W_{ij}=\partial_i\partial_j W$,

$$I_F(W(\Phi))=2W_i(a)\mathcal F^i-2W_{ij}(a)\psi^i_1\psi^j_2,\qquad\mathcal L_{W}=W_i(a)\mathcal F^i-W_{ij}(a)\psi^i_1\psi^j_2+\left(W_i(a)\mathcal F^i-W_{ij}(a)\psi^i_1\psi^j_2\right)^*.$$

The full component action is $S_{\mathrm{WZ}}=\int_M(\mathcal L_D+\mathcal L_W)\,d^4x$, interpreted coefficientwise. In particular Hermitian conjugation is added to the extracted F-component once, with the reversed fermion order imposed by $*$.

For a direct check of the complete bosonic conversion, the Pauli matrices give $\mathcal C(h^\mu h^\nu)=-2\eta^{\mu\nu}$: its diagonal is $(2,-2,-2,-2)$ and off-diagonal entries vanish. On the ordinary bosonic slice, $d=h^\mu\partial_\mu\phi+\tfrac12h^\mu h^\nu\partial_\mu\partial_\nu\phi+2\theta^1\theta^2F$ and its conjugate has $h\mapsto-h$ and auxiliary term $-2\bar\theta^{\dot1}\bar\theta^{\dot2}\bar F$. The mixed auxiliary product has top coefficient $-4F^i\bar F^{\bar j}$, and the scalar derivative terms give $4g_{i\bar j}\partial_\mu\phi^i\partial^\mu\bar\phi^{\bar j}-\Box K$. Multiplying by $-1/4$ yields the kinetic and positive complex auxiliary terms displayed in the Postulate. The F bracket's $1/2$ cancels the coefficient $2$ in $F_{\mathrm{raw}}=2F$, giving $F^iW_i$ rather than twice that term. Compact support makes $\int_M\Box K=0$: outside a compact set $K$ is the constant $K(0,0)$, so its derivative has compact support. Setting spacetime derivatives and fermions to zero then yields exactly the auxiliary Lagrangian consumed by the F-term theorem.
