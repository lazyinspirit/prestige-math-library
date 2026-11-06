---
id: def-cft-r5-n2-minimal-and-landau-ginzburg-model
kind: definition
title: One-field N=(2,2) Landau–Ginzburg model and A-series minimal-model conjecture
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
deps:
  - def-cft-r5-full-local-cft-data
  - def-cft-r5-n2-superconformal-algebra
  - thm-cft-r5-n2-one-field-jacobian-algebra
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-cft-r5-n2-superconformal-algebra: mathematical-premise
  thm-cft-r5-n2-one-field-jacobian-algebra: mathematical-premise
physical_scope: "Two-dimensional N=(2,2) one-chiral-field Landau–Ginzburg theory with W proportional to X^(k+2), its protected chiral-ring calculation, and the conjectured A-series infrared endpoint; no RG-equivalence proof is asserted."
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Edward Witten, On the Landau–Ginzburg Description of (N=2) Minimal Models, arXiv:hep-th/9304026v3"
      url: https://arxiv.org/pdf/hep-th/9304026
      locator: "§§1–3, especially the one-field superpotential normalization, chiral algebra, central charge and explicit conjectural status of the infrared identification."
    - title: "Wolfgang Lerche, Cumrun Vafa and Nicholas P. Warner, Chiral Rings in N=2 Superconformal Theories, HUTP-88/A065 / CALT-68-1540, February 1989 preprint"
      url: https://lerche.web.cern.ch/papers/ChiralRings.pdf
      locator: "The linked February 1989 preprint edition: §1, equations (1.1)–(1.2), printed pp. 1–2 (N=2 mode algebra); §3, equations (3.1)–(3.3), printed pp. 20–22 (quasi-homogeneity, action and chiral-ring quotient), and (3.6)–(3.7), printed p. 23 (weights and central charge). These are preprint locators, not the differently numbered journal edition."
    - title: "Stefan Fredenhagen, Cosimo Restuccia, Rui Sun, The limit of N=(2,2) superconformal minimal models, JHEP 10 (2012) 141, arXiv:1204.0446v2"
      url: https://arxiv.org/pdf/1204.0446v2
      locator: "§2.1, equations (2.1)–(2.13), printed pp. 4–5: bosonic-subalgebra labels, field identification and weight/charge offsets, followed by full NS grouping s=0,2 and full Ramond grouping s=1,-1."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Facts & Assumptions

**Given:** Let $k\in\mathbb Z_{\ge1}$, let $\lambda\in\mathbb C\setminus\{0\}$ be a fixed neutral coupling of mass dimension one, and use $\hbar=1$. Work in flat two-dimensional Minkowski spacetime with metric $(+,-)$, coordinates of length dimension one, a dimensionless scalar, Weyl fermions of mass dimension $1/2$, and auxiliary fields of mass dimension one.

[F1] [[def-cft-r5-full-local-cft-data]]: The full-local-CFT item defines a local state-space/OPE package with specified convergent OPEs, locality and crossing; listing an action or its predicted spectrum does not prove those data exist.

[F2] [[def-cft-r5-n2-superconformal-algebra|$N=2$ superconformal mode algebra in NS and Ramond sectors]]: The $N=2$ algebra has generators $L_n,J_n,G_r^\pm$ with central charge $c$ and independent NS/R choices in the left and right copies.

[F3] [[thm-cft-r5-n2-one-field-jacobian-algebra|The one-field $N=2$ Landau–Ginzburg Jacobian algebra has dimension k+1]]: For $W(X)=\lambda X^{k+2}/(k+2)$ with $k\ge1$ and $\lambda\ne0$, $\operatorname{Jac}(W)=\mathbb C[X]/(X^{k+1})$ with basis $[1],\ldots,[X^k]$ and dimension $k+1$.

[A5] The flat two-dimensional N=(2,2) superspace used here has coordinates $x^0,x^1\in\mathbb R$ and independent Grassmann-odd coordinates $\theta^\pm,\bar\theta^\pm$, each of mass dimension $-1/2$; the odd coordinates square to zero and mutually anticommute. Set $\partial_\pm=\partial_0\pm\partial_1$ and, using left Grassmann derivatives, define $D_\pm=\partial_{\theta^\pm}-i\bar\theta^\pm\partial_\pm$ and $\bar D_\pm=-\partial_{\bar\theta^\pm}+i\theta^\pm\partial_\pm$. These satisfy $\{D_\pm,\bar D_\pm\}=2i\partial_\pm$, with same-type squares zero and cross-chirality anticommutators zero. A **chiral superfield** means a superfunction $\mathcal X$ satisfying $\bar D_+\mathcal X=\bar D_-\mathcal X=0$. Let $\Lambda$ be a complex Grassmann algebra, so its odd elements anticommute. The superfield's components are a smooth complex scalar $x:\mathbb R^{1,1}\to\mathbb C$, smooth one-component Grassmann-odd fields $\psi_\pm:\mathbb R^{1,1}\to\Lambda_{\bar 1}$ of opposite chiralities (with $\bar\psi_\pm$ their conjugate fields), and a smooth complex auxiliary scalar $F:\mathbb R^{1,1}\to\mathbb C$. The classical action below is evaluated on smooth compactly supported profiles, so its spacetime integrals are finite. Berezin integration is normalized by $\int d\theta\,1=0$ and $\int d\theta\,\theta=1$, with the order of odd integrations as displayed below. Extend complex conjugation to an antilinear parity-preserving order-reversing involution $*$: $(AB)^*=B^*A^*$, $i^*=-i$, $(\theta^\pm)^*=\bar\theta^\pm$, $x^*=\bar x$, $\psi_\pm^*=\bar\psi_\pm$ and $F^*=\bar F$. The coordinate generators also anticommute with the odd coefficient fields. No extra sign is inserted in the involution; signs appear when odd factors are put back in the displayed order. Spacetime derivatives commute with $*$. Iterated Berezin integrals apply the rightmost integration first, using the left odd derivatives and then setting the integrated odd variables to zero. In particular, $\int d^4\theta\,P$ is the coefficient of $\theta^+\bar\theta^+\theta^-\bar\theta^-$, while $\int d\theta^+d\theta^-\,P$ is minus the coefficient of $\theta^+\theta^-$ at $\bar\theta=0$. The conjugate chiral measure is $d^2\bar\theta=d\bar\theta^-d\bar\theta^+$, so conjugating the chiral integral gives the antichiral integral with that order. Spacetime integration and integration by parts are understood coefficientwise in the Grassmann algebra for the compactly supported smooth profiles above.

For the terms below, a left-moving $N=2$ **superconformal primary** is a nonzero joint eigenvector $v$ of $L_0,J_0$ annihilated by $L_n,J_n$ for all integers $n>0$ and by $G_r^\pm$ for all positive NS half-integers $r$. A left **chiral primary** further satisfies $G_{-1/2}^+v=0$ and $h=Q/2$, where $L_0v=hv$ and $J_0v=Qv$; an anti-chiral primary satisfies $G_{-1/2}^-v=0$ and $h=-Q/2$. Define the right-moving conditions with the barred algebra; the $(c,c)$ sector consists of operators whose left and right states are chiral primaries. For polynomial variables $X_i$ assigned weights $q_i$, a monomial $\prod_iX_i^{n_i}$ has weight $\sum_i n_iq_i$; a polynomial is **quasi-homogeneous of weight one** when each nonzero monomial has that weight. For $W$ in one complex field, the origin is an **isolated critical point** when $W'(x)=0$ has no other solution in some neighborhood of $x=0$.

[A1] Adopt the one-field N=(2,2) Landau–Ginzburg chiral-ring prescription reported in the linked February 1989 Lerche–Vafa–Warner preprint, §3, equation (3.3), printed p. 22. The ring product in the $(c,c)$ sector is induced by the local operator product. The **D-term** is the full-superspace kinetic term and the **F-term** is the chiral-superspace superpotential term in the action below. For a quasi-homogeneous superpotential with an isolated critical point, assume a D-term choice for which the action is conformally invariant; the physical prescription sets the equation-of-motion insertion $\partial_X W$ to zero in the chiral ring. Thus the protected chiral ring is the polynomial ring modulo $(\partial_X W)$. This is a physical model input; the algebraic quotient theorem does not prove it.

[A2] Adopt the $N=2$ Landau–Ginzburg quasi-homogeneous central-charge prescription, reported in that February 1989 Lerche–Vafa–Warner preprint, §3, equation (3.7), printed p. 23: if $W$ has polynomial weight one and chiral fields have weights $q_i$, then the proposed infrared $N=2$ fixed point has $c=3\sum_i(1-2q_i)$. This is a fixed-point prediction conditional on that prescription, not a theorem that the flow reaches the fixed point.

[A3] Witten, §§1–3, describes the identification of this one-field model with the A-series minimal model as a conjecture; elliptic-genus or character agreement alone does not establish full local-CFT equivalence.

[A4] Witten, §2.2, equation (2.14), fixes the left-moving R charges: $x$ and $\psi_+$ have charge $q_X$, while $\psi_-$ has charge $-(k+1)q_X$. Use the independent chirality-swapped assignment for the right-moving R current.


## Definition

Let $\mathcal X$ be one N=(2,2) chiral superfield in the sense of [A5]. Put $a=\theta^+\bar\theta^+$, $b=\theta^-\bar\theta^-$. Use the following finite translations:
$$\mathscr T_\mp:=\exp\!\bigl(\mp i(a\partial_++b\partial_-)\bigr)=1\mp i a\partial_+\mp i b\partial_--ab\partial_+\partial_-.$$
Fix the component convention by
$$\mathcal X=\mathscr T_-\bigl(x+\sqrt2\theta^+\psi_++\sqrt2\theta^-\psi_-+2\theta^+\theta^-F\bigr),$$
$$\overline{\mathcal X}:=\mathcal X^*=\mathscr T_+\bigl(\bar x-\sqrt2\bar\theta^+\bar\psi_+-\sqrt2\bar\theta^-\bar\psi_--2\bar\theta^+\bar\theta^-\bar F\bigr).$$
Thus $x=\mathcal X|_0$, $\psi_\pm=2^{-1/2}\partial_{\theta^\pm}\mathcal X|_0$, and $F=\tfrac12\partial_{\theta^-}\partial_{\theta^+}\mathcal X|_0$, where $|_0$ sets all odd coordinates to zero. The finite translations act on the smooth coefficient fields; these formulas specify every odd coefficient, not an assumed component correspondence. Choose
$$W(\mathcal X)=\frac{\lambda}{k+2}\mathcal X^{k+2},\qquad k\ge1,\quad \lambda\in\mathbb C\setminus\{0\}.$$
The superspace action is
$$S=\frac14\int d^2x\,d^4\theta\,\overline{\mathcal X}\mathcal X-\frac12\left(\int d^2x\,d^2\theta\,W(\mathcal X)+\text{complex conjugate}\right),$$
where $d^4\theta=d\theta^+d\bar\theta^+d\theta^-d\bar\theta^-$ and $d^2\theta=d\theta^+d\theta^-$. With these explicit normalizations, integration gives, up to the compact-support total derivatives computed below, the off-shell component Lagrangian
$$\mathcal L=\partial_\mu\bar x\,\partial^\mu x+i\bar\psi_+\partial_-\psi_++i\bar\psi_-\partial_+\psi_-+\bar F F+ \left(FW'(x)-W''(x)\psi_+\psi_-+\text{complex conjugate}\right).$$
The auxiliary equation is algebraic. Assign polynomial weight $q_X$ to $x$ and add weights under multiplication, so $x^n$ has weight $nq_X$. A polynomial is **quasi-homogeneous of weight one** when each of its nonzero monomials has weight one. The single monomial $W$ therefore has $q_X=1/(k+2)$. Set $q=q_X$. Under the left R current, $x$ and $\psi_+$ have charge $q$, while $\psi_-$ has charge $-(k+1)q$ as in [A4]. Under the independent right R current, exchange $\psi_+$ and $\psi_-$. The auxiliary field $F$ has charge $-(k+1)q$ under each current so the term $FW'(x)$ is neutral; $\bar F$ has the opposite charge. Thus $x$ has $q_L=q_R=q$, and $W$ has charge one under each R current and vector charge two. The Yukawa term is neutral because $W''$ has charge $kq$ and $\psi_+\psi_-$ has charge $-kq$; $|W'|^2$ and the kinetic terms are also neutral. An **isolated critical point at the origin** means $W'(x)=0$ has no solution near the origin other than $x=0$; the calculation below verifies this for the chosen $W$. This specifies the UV Landau–Ginzburg action and its charge convention.

The $N=(2,2)$ mode symmetry is the independent left/right $N=2$ algebra in [F2]. The four possible left/right moding labels are NS–NS, NS–R, R–NS and R–R; spectral flow relates sectors as specified in that algebra. Any claimed full local model must additionally provide the data required in [F1].

For the level-$k$ A-series minimal-model target, the classes $[\ell,m,s]$ label irreducible representations $\mathcal H_{[\ell,m,s]}$ of the **bosonic subalgebra**, not separate full $N=2$ superconformal modules. Here $\ell\in\{0,\ldots,k\}$, $m\in\mathbb Z/(2k+4)\mathbb Z$, $s\in\mathbb Z/4\mathbb Z$, $\ell+m+s\equiv0\pmod2$, and $(\ell,m,s)\sim(k-\ell,m+k+2,s+2)$. Their weight and charge offsets are
$$h_{\ell,m,s}=\frac{\ell(\ell+2)-m^2}{4(k+2)}+\frac{s^2}{8},\qquad q_{m,s}=-\frac{m}{k+2}+\frac{s}{2}.$$
For representatives in the source's standard range $|m-s|\le\ell$, these give the ground-state values; outside that range, the appropriate integral weight and even integral charge shifts must be retained. For $\varepsilon=0$ (NS) or $\varepsilon=1$ (Ramond), let $I_\varepsilon$ be the allowed pairs $(\ell,m)$ with $\ell+m+\varepsilon$ even, modulo $(\ell,m)\sim(k-\ell,m+k+2)$. The full $N=2$ modules are the grouped sums
$$\mathcal V^{\rm NS}_{[\ell,m]}=\mathcal H_{[\ell,m,0]}\oplus\mathcal H_{[\ell,m,2]},\qquad \mathcal V^{\rm R}_{[\ell,m]}=\mathcal H_{[\ell,m,1]}\oplus\mathcal H_{[\ell,m,-1]}.$$
The odd superconformal generators connect the two bosonic summands. Accordingly the diagonal target in each matching left/right spin sector has state space
$$\mathcal H^{\rm diag}_\varepsilon=\bigoplus_{[\ell,m]\in I_\varepsilon}\mathcal V^{\varepsilon}_{[\ell,m]}\otimes\overline{\mathcal V^{\varepsilon}_{[\ell,m]}},\qquad c=\frac{3k}{k+2},$$
where $\mathcal V^0=\mathcal V^{\rm NS}$ and $\mathcal V^1=\mathcal V^{\rm R}$. Thus there is one diagonal summand per full superconformal module, rather than one per bosonic $[\ell,m,s]$ orbit. This specifies the matching-spin diagonal spectra; any mixed-sector extension and parity projection require their stated additional choices. It does not specify a full local OPE package in the sense of [F1]. The assertion that the RG flow reaches that full local CFT remains the conjecture [A3], not part of the UV definition or a proved consequence here.

## Proof

1.1 Write $\partial_+\partial_-=\Box=\partial_0^2-\partial_1^2$. Left odd differentiation of the finite translations gives $\bar D_\pm(\mathscr T_-P)=0$ for every polynomial $P$ depending only on $\theta^+,\theta^-$ and the spacetime coordinates. For example $\partial_{\bar\theta^+}a=-\theta^+$, so the derivative of the $-ia\partial_+$ term cancels $i\theta^+\partial_+$ in $\bar D_+$; the $ab$ term supplies the same cancellation after the other translation. Multiplying by $\mathscr T_+$ conversely turns either chirality constraint into independence of the corresponding $\bar\theta$ variable. Hence the displayed degree-two chiral polynomial determines all odd-coordinate coefficients from the component data stipulated in [A5]. Order reversal sends $\theta^+\psi_+$ to $-\bar\theta^+\bar\psi_+$ and $\theta^+\theta^-F$ to $-\bar\theta^+\bar\theta^-\bar F$, while $a^*=a$, $b^*=b$. It therefore gives precisely the displayed antichiral superfield, which similarly satisfies $D_\pm\overline{\mathcal X}=0$. This proves the component map and its conjugation signs directly from [A5]. [given, A5, algebra]

1.2 The monomial $W=\lambda x^{k+2}/(k+2)$ has polynomial weight $(k+2)q_X$. Requiring the quasi-homogeneous weight of $W$ to be one therefore gives $q_X=1/(k+2)$. With this value, the left charges in [A4] give $W$ charge $(k+2)q_X=1$; the chirality-swapped right charges give the same result, so the vector charge is two. Also $W''\psi_+\psi_-$ has charge $kq+q-(k+1)q=0$, $FW'$ has charge $-(k+1)q+(k+1)q=0$, and $|W'|^2$ and the kinetic terms are neutral. Thus these assignments preserve the component action. [given, A4, algebra]

1.3 Formal differentiation gives $W'(x)=\lambda x^{k+1}$, so its only critical point is $x=0$ because $\lambda\ne0$. Under the physical prescription [A1], the protected chiral ring is $\operatorname{Jac}(W)$; [F3] computes it as $\mathbb C[x]/(x^{k+1})$ with basis $1,x,\ldots,x^k$. The quotient computation does not itself prove the cohomology prescription. [given, A1, F3, algebra]

2.1 Here is the complete full-measure coefficient. For the scalar part the $ab$ coefficient in $\overline{\mathcal X}\mathcal X$ is $$-\bar x\partial_+\partial_-x-x\partial_+\partial_-\bar x+\partial_+\bar x\partial_-x+\partial_-\bar x\partial_+x.$$ The auxiliary product contributes $4\bar F F$: reordering $\bar\theta^+\bar\theta^-\theta^+\theta^-$ to $\theta^+\bar\theta^+\theta^-\bar\theta^-$ has sign minus, which cancels the antichiral seed's minus. For each fermion, its unshifted linear term times the other factor's one-translation term gives the two contributions. For $\psi_+$ their sum is $2i(\bar\psi_+\partial_-\psi_+-(\partial_-\bar\psi_+)\psi_+)$, and for $\psi_-$ it is $2i(\bar\psi_-\partial_+\psi_--(\partial_+\bar\psi_-)\psi_-)$. These signs include moving the odd coefficient past an odd coordinate. No other pair of seed terms can fill the four distinct coordinates: scalar/auxiliary or mixed-chirality fermion products leave a repeated coordinate or an unfilled one. Thus, writing $C_D=[\theta^+\bar\theta^+\theta^-\bar\theta^-](\overline{\mathcal X}\mathcal X)$, these scalar, auxiliary and four fermion terms are the entire coefficient. [given, A5, step 1.1, algebra]

2.2 Substituting $q_X=1/(k+2)$ into [A2] for one chiral field gives the conditional fixed-point prediction $ c=3\left(1-\frac{2}{k+2}\right)=\frac{3k}{k+2}. $ The central charge is the scalar in the $N=2$ brackets [F2]. This arithmetic derives the prediction from the stated anomaly prescription, not the existence or reachability of an infrared fixed point. [given, A2, F2, step 1.2, algebra]

3.1 Define $\mathcal L_D=\partial_\mu\bar x\partial^\mu x+i\bar\psi_+\partial_-\psi_++i\bar\psi_-\partial_+\psi_-+\bar F F$. Since $\partial_+\bar x\partial_-x+\partial_-\bar x\partial_+x=2\partial_\mu\bar x\partial^\mu x$, the product rule applied to the scalar expression in step 2.1 gives $4\partial_\mu\bar x\partial^\mu x-\Box(\bar x x)$. For the fermions the same even derivative product rule gives $$C_D=4\mathcal L_D-\Box(\bar x x)-2i\partial_-(\bar\psi_+\psi_+)-2i\partial_+(\bar\psi_-\psi_-).$$ All three total derivatives integrate to zero: coefficientwise, integrate a compactly supported first derivative over each real coordinate, obtaining its zero endpoint difference; the second derivative is treated twice. Consequently the D-term with coefficient $1/4$ integrates to $\int d^2x\,\mathcal L_D$ exactly. The fixed derivatives of [A5] and the scalar lowest component $x$ therefore require the stated D-term prefactor. [given, A5, step 2.1, algebra]

4.1 On the chiral integration slice $\bar\theta=0$ put $\delta=\sqrt2\theta^+\psi_++\sqrt2\theta^-\psi_-+2\theta^+\theta^-F$. Then $\delta^3=0$ and $[\theta^+\theta^-]\delta^2=-4\psi_+\psi_-$: each linear cross-product has one minus from moving its odd coefficient past the other odd coordinate. The polynomial Taylor identity $W(x+\delta)=W(x)+W'(x)\delta+W''(x)\delta^2/2$ therefore gives $$[\theta^+\theta^-]W(\mathcal X)=2FW'(x)-2W''(x)\psi_+\psi_-.$$ The displayed chiral measure is minus this coefficient by [A5]. Its prefactor $-1/2$ gives exactly $FW'(x)-W''(x)\psi_+\psi_-$. In the conjugate measure order $d\bar\theta^-d\bar\theta^+$ the coefficient is $-2\bar F\overline{W'(x)}-2\overline{W''(x)}\bar\psi_+\bar\psi_-$; multiplication by $-1/2$ gives $\bar F\overline{W'}+\overline{W''}\bar\psi_+\bar\psi_-$, which is the order-reversing conjugate of the chiral component term. Together with step 3.1 this proves the full stated superspace/component equality of actions, including kinetic, auxiliary and Yukawa coefficients, for every selected $k$ and $\lambda$. [given, A5, step 1.1, step 3.1, algebra]

5.1 Now vary that established component Lagrangian with respect to $\bar F$, treating $F,\bar F$ independently before imposing conjugation. The equation is $F+\overline{W'(x)}=0$. Substituting it and its conjugate yields the scalar potential $V(x,\bar x)=|W'(x)|^2$. This eliminates the auxiliary field; it is separate from the component-extraction calculation already proved. [given, step 4.1, algebra]

6.1 The action and calculations above specify the UV model and two conditional protected-data predictions. They do not supply a full local-CFT state space or convergent OPEs in the sense of [F1], and they do not prove the RG identification, which [A3] explicitly leaves conjectural. [given, A3, F1, step 4.1, step 5.1, step 1.2, step 1.3, step 2.2] ∎
