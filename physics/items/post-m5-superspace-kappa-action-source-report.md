---
id: post-m5-superspace-kappa-action-source-report
kind: postulate
title: Source report for the superspace M5 kappa action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - def-m5-brane-worldvolume-tensor-action
  - post-eleven-dimensional-cjs-supergravity-action
dependency_roles:
  def-m5-brane-worldvolume-tensor-action: formulation-prerequisite
  post-eleven-dimensional-cjs-supergravity-action: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Source-reported classical covariant kappa-symmetric candidate for one M5 in constrained eleven-dimensional superspace; the detailed kappa-variation proof and convention crosswalk are not certified."
sources:
  references:
    - title: "Igor Bandos, Kurt Lechner, Aleksei Nurmagambetov, Paolo Pasti, Dmitri Sorokin, and Mario Tonin, Covariant Action for the Super-Five-Brane of M-Theory, arXiv:hep-th/9701149v2"
      url: "https://arxiv.org/pdf/hep-th/9701149v2"
      locator: "PDF pp. 2–4, equations (1)–(12), convention footnote 2, and the paragraphs postponing the detailed proof; source-specific action, target coframe, constraints, pullbacks, projector, and transformations."
    - title: "Paolo Pasti, Dmitri Sorokin, and Mario Tonin, Covariant Action for a D=11 Five-Brane with the Chiral Field, arXiv:hep-th/9701037v3"
      url: "https://arxiv.org/pdf/hep-th/9701037v3"
      locator: "§§2–3, Eqs. (16)–(18), PDF pp. 2–6; bosonic local action and gauge convention."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Postulate

Use the following local mathematical realization of the reported source convention. Fix a real smooth target superchart $\mathcal U^{11|32}$ with open body $U\subset\mathbb R^{11}$ and sheaf $\mathcal O_{\mathcal U}=C^\infty_U\otimes_\mathbb R\Lambda^\bullet(\mathbb R^{32})^*$, complexified when factors of $i$ occur. The body projection sets every odd generator and every positive-degree Grassmann coefficient to zero; a superscript $(0)$ below denotes this projection. Coordinates $Z^{\underline M}=(X^{\underline m},\Theta^{\underline\mu})$ have respectively even and odd parity. Here $\underline m,\underline a=0,\ldots,10$ and $\underline\mu,\underline\alpha=1,\ldots,32$. Supply a parity-preserving invertible coframe map (vector coframe elements even, spinor coframe elements odd), written $E^{\underline A}=dZ^{\underline M}E_{\underline M}{}^{\underline A}$, a source-Lorentz connection given by even one-forms $\omega^{\underline a}{}_{\underline b}$ with $\omega_{\underline{ab}}=-\omega_{\underline{ba}}$ and its action in the supplied spin representation, and even local superforms $C^{(3)}$ and $C^{(6)}$. Here “even” for a superform means even intrinsic parity; form degree is a separate grading. The vector metric is $\eta=\operatorname{diag}(+,-,\ldots,-)$. Supply the source's 32-dimensional Majorana spinor representation, imaginary matrices $\Gamma_{\underline a}$ with $\{\Gamma_{\underline a},\Gamma_{\underline b}\}=2\eta_{\underline{ab}}I$, and a specified nondegenerate charge-conjugation matrix $C$ defining the lowered matrices $(\Gamma_{\underline a_1\cdots\underline a_k})_{\underline\alpha\underline\beta}:=(C\Gamma_{\underline a_1\cdots\underline a_k})_{\underline\alpha\underline\beta}$ in the source index convention. Here $\Gamma_{a_1\cdots a_k}:=\frac1{k!}\sum_{\sigma\in S_k}\operatorname{sgn}(\sigma)\Gamma_{a_{\sigma(1)}}\cdots\Gamma_{a_{\sigma(k)}}$, where $S_k$ is the permutation group; use the same antisymmetrization for worldvolume indices below. These supplied data, rather than the component CJS fields, define the target geometry in this item.

For precision fix the source's right differential as follows. In the bigraded superform algebra $dZ^{\underline M}\wedge dZ^{\underline N}=-(-1)^{|M||N|}dZ^{\underline N}\wedge dZ^{\underline M}$, and a coefficient of parity $p$ commutes past $dZ^{\underline M}$ with sign $(-1)^{p|M|}$. If $d_L$ is the usual left de Rham differential, set $d_R\alpha=(-1)^p d_L\alpha$ for a homogeneous form of degree $p$; then $d_R^2=0$ and $d_R(\alpha\wedge\beta)=\alpha\wedge d_R\beta+(-1)^q d_R\alpha\wedge\beta$ when $\beta$ has degree $q$. Below every $d$ on a source superform means $d_R$, with written factor order retained. In particular $dZ$ agrees for the two differentials. This defines a right convention rather than identifying it with a left-convention CJS potential.

Adopt the following background constraints as physical source data, not as consequences of the mathematical sheaf. Define $DE^{\underline a}:=d_RE^{\underline a}+E^{\underline b}\wedge\omega^{\underline a}{}_{\underline b}$, the vector-valued right covariant derivative in this convention, and set $T^{\underline a}=DE^{\underline a}$ and require
$$T^{\underline a}=-iE^{\underline\alpha}\wedge E^{\underline\beta}(\Gamma^{\underline a})_{\underline\alpha\underline\beta}+E^{\underline b}\wedge E^{\underline\beta}T^{\underline a}_{\underline b\underline\beta}+\frac12E^{\underline b}\wedge E^{\underline c}T^{\underline a}_{\underline b\underline c},$$
$$R^{(4)}:=dC^{(3)}=\frac12E^{\underline b}\wedge E^{\underline a}\wedge E^{\underline\alpha}\wedge E^{\underline\beta}(\Gamma_{\underline{ab}})_{\underline\alpha\underline\beta}+\frac1{4!}E^{\underline a}\wedge E^{\underline b}\wedge E^{\underline c}\wedge E^{\underline d}R_{\underline{dcba}},$$
$$R^{(7)}:=dC^{(6)}+\frac12C^{(3)}\wedge R^{(4)}=\frac{i}{5!}E^{\underline a_1}\wedge\cdots\wedge E^{\underline a_5}\wedge E^{\underline\alpha}\wedge E^{\underline\beta}(\Gamma_{\underline a_1\cdots\underline a_5})_{\underline\alpha\underline\beta}+R^{(7)}_{\ge6}.$$
All unlisted components are supplied smooth superfunctions of the indicated parity, and $R^{(7)}_{\ge6}$ denotes a supplied degree-seven form each of whose coframe monomials contains at least six vector one-forms. On the exterior algebra generated by the eleven vector coframe elements, define $*_{\mathrm{vec}}$ for equal-degree vector forms by $u\wedge *_{\mathrm{vec}}v=\langle u,v\rangle_\eta E^0\wedge\cdots\wedge E^{10}$ where the pairing on decomposable $k$-forms is the determinant of the $k\times k$ matrix of pairings from $\eta^{-1}$; extend linearly over smooth even supercoefficients. Require the purely vector degree-seven component of $R^{(7)}$ to equal $*_{\mathrm{vec}}$ of the purely vector degree-four component of $R^{(4)}$. The displayed spinorial terms record separately the source's $\Gamma_{ab}\mapsto\Gamma_{a_1\cdots a_5}$ prescription accompanying its notation $R^{(7)}=*dC^{(3)}$ in equation (5). Thus the ordinary bosonic Hodge map and the two spinorial components are explicit; no Hodge map on arbitrary $11|32$ superforms is presumed. These requirements reproduce the constraint interface of source equations (5)–(6); they neither construct all backgrounds nor claim that arbitrary component CJS fields possess such an extension. The flat specialization uses $E^{\underline a}=dX^{\underline a}-i\,d\Theta\Gamma^{\underline a}\Theta$ as in source equation (3).

Let $\Sigma_6$ be a Hausdorff second-countable smooth oriented six-manifold (possibly with boundary), with oriented local coordinates $\xi^m$, $m=0,\ldots,5$, and fix a finite real Grassmann algebra $\Lambda=\Lambda_\mathbb R(\epsilon_1,\ldots,\epsilon_N)$, using $\Lambda_\mathbb C$ for complex coefficients. A field map $Z$ is a parity-preserving sheaf homomorphism $Z^\sharp:x^{-1}(\mathcal O_{\mathcal U}\otimes\mathbb C)\to C^\infty_{\Sigma_6}\otimes\Lambda_\mathbb C$ of unital $\mathbb C$-algebras with real body map $x:\Sigma_6\to U$. Its coordinate fields are coefficientwise smooth $X^{\underline m}\in C^\infty\otimes(\Lambda_\mathbb C)_{\bar0}$ and $\Theta^{\underline\mu}\in C^\infty\otimes(\Lambda_\mathbb C)_{\bar1}$. Write $X=x+n$ with nilpotent even $n$; substitution of any smooth coefficient $f$ means the finite Taylor sum $\sum_\nu(\partial^\nu f)(x)n^\nu/\nu!$, followed by polynomial substitution for the odd coordinates. Require the vector coframe and potential bodies, and the bodies of $A_2$ and $a$ below, to be real. No reality condition on nilpotent coefficients is imposed. Require $x$ to be a smooth immersion with induced body metric $x^*(E^{\underline a}|_{\Theta=0})\eta_{\underline{ab}}x^*(E^{\underline b}|_{\Theta=0})$ of signature $(+-----)$. All image points lie in the one potential superchart; no global patching or injectivity in nilpotent directions is assumed.

Extend $P=Z^*$ to superforms by $P(dZ^{\underline M})=d(Z^\sharp Z^{\underline M})$, multiplication and the displayed graded wedge rules. Thus $P(E^{\underline A})=d\xi^m E_m{}^{\underline A}$, where $E_m{}^{\underline A}=\partial_m Z^{\underline M}Z^\sharp(E_{\underline M}{}^{\underline A})$ with precisely this factor order; $P[C^{(p)}]$ is an ordinary degree-$p$ worldvolume form with Grassmann coefficients. Use the same right differential on the coefficient-valued worldvolume form algebra. Supply an even two-form $A_2$ and an even scalar $a$, coefficientwise smooth, and define $F_3=2d_RA_2$, equivalently $F_{mnl}=2(\partial_lA_{mn}+\partial_mA_{nl}+\partial_nA_{lm})$ in $A_2=\frac12d\xi^m\wedge d\xi^n A_{mn}$. Use $H_3=F_3-P[C^{(3)}]$. Worldvolume and target coordinates and all displayed fields are in the source-normalized dimensionless convention; the omitted overall physical tension is an independent conversion to a physical action.

Define $g_{mn}:=E_m{}^{\underline a}\eta_{\underline{ab}}E_n{}^{\underline b}$ and $g:=\det(g_{mn})$; $g^{mn}$ denotes the inverse matrix and $\partial^m a:=g^{mn}\partial_n a$. Let $e^{m_1\cdots m_6}$ be the oriented alternating symbol with $e^{012345}=+1$, and put $\epsilon^{m_1\cdots m_6}:=e^{m_1\cdots m_6}/\sqrt{-g}$. Lower the indices of this tensor with $g$ to define $\varepsilon_{m_1\cdots m_6}$ used in the reported matrix below; it is the covariant alternating tensor, not a constant lower-index density. Set
$$H^{*mnl}:=\frac{e^{mnlpqr}H_{pqr}}{3!\sqrt{-g}},\qquad H^*_{mnl}:=g_{mr}g_{ns}g_{lt}H^{*rst},\qquad (\partial a)^2:=g^{mn}\partial_m a\,\partial_n a,$$
$$\widetilde H_{mn}:=\frac{H^*_{mnl}\partial^la}{\sqrt{-(\partial a)^2}},\qquad \Gamma_m:=E_m{}^{\underline a}\Gamma_{\underline a},\qquad \Gamma^{(6)}:=\frac{e^{m_1\cdots m_6}\Gamma_{m_1\cdots m_6}}{6!\sqrt{-g}}.$$
All raised worldvolume indices use $g^{mn}$. These make explicit the Hodge and normalized Clifford-volume notation in the local source report; no projector identity is inferred from the notation. The metric, its inverse and determinant are even Grassmann matrices and elements. Require the body of $(\partial a)^2$ to be strictly negative. For the Born–Infeld square root restrict the real body of $H$ at each point to the connected component containing zero of the domain $\det(g^{(0)}+i\widetilde H^{(0)})<0$, with $g^{(0)}$ and $da^{(0)}$ fixed. The determinant is real on real body fields because its complex conjugate is its transpose determinant. Every inverse and square root below means the finite Taylor expansion about its nonzero body, taking the positive real square root when the body is positive. This defines the negative-norm auxiliary branch and the square-root domain without changing the source action or claiming all field configurations are admissible. Integrate top forms coefficientwise on compact $\Sigma_6$ whenever admissible fields exist, or integrate compactly supported differences between configurations agreeing outside a compact subset of the interior.

For the fermionic transformations, let $S$ denote the supplied 32-dimensional spin representation. The parameter $\kappa\in C^\infty(\Sigma_6)\otimes(\Lambda_\mathbb C)_{\bar1}\otimes S$ is coefficientwise smooth; on the target chart this is a section of the pulled-back trivial spinor bundle. For action variations take compact support in the interior. A variation $K=\delta_\kappa Z$ is an even derivation along $Z^\sharp$: it sends each homogeneous coordinate to a coefficient of the same parity and satisfies $K(fg)=K(f)P(g)+P(f)K(g)$. The symbol $i_\kappa E^{\underline A}$ means $K^{\underline M}Z^\sharp(E_{\underline M}{}^{\underline A})$. More generally define the right contraction on target forms by $i_\kappa f=0$, $i_\kappa(dZ^{\underline M})=K^{\underline M}$ and $i_\kappa(\alpha\wedge\beta)=P\alpha\wedge i_\kappa\beta+(-1)^q i_\kappa\alpha\wedge P\beta$ for $\beta$ of form degree $q$, together with the intrinsic-parity commutation rules above. This is contraction in the right convention followed by pullback. Invertibility of the coframe types the two equations specifying $i_\kappa E^{\underline a}$ and $i_\kappa E^{\underline\alpha}$ as a specification of $K$. In the reported equation for $\delta_\kappa H$, $i_\kappa dC^{(3)}$ is therefore a worldvolume three-form. The associated variation of $A_2$, and the claimed invariance under these transformations, are part of the source report; no existence or invariance proof is supplied by this typing convention.

Set $\hbar=1$ and suppress the source action's overall physical tension, which is supplied separately. Adopt as a source-reported classical candidate the covariant superspace action for one M5 in a constrained $D=11$ supergravity superspace with bosonic coordinates $X^{\underline m}$ and a 32-component Majorana coordinate $\Theta^{\underline\mu}$. Keep the Bandos et al. source conventions: the metrics have the source's “almost negative” signature, the exterior derivative acts from the right, and the eleven-dimensional gamma matrices are imaginary. With these source-specific data, the induced metric is $g_{mn}=E_m^{\underline a}\eta_{\underline{ab}}E_n^{\underline b}$, $H_3=F_3-P[C^{(3)}]$, and the PST auxiliary scalar supplies the covariant chiral-tensor structure. The source action has the form
$$S_B=-\int d^6\xi\left[ \sqrt{-\det(g+i\widetilde H)} -\frac{\sqrt{-g}}{4(\partial a)^2}\partial_m a\,H^{*mnl}H_{nlp}\partial^pa \right] -\int_{\Sigma_6}\left(P[C^{(6)}]+\frac12F_3\wedge P[C^{(3)}]\right),$$
with $(\partial a)^2<0$ in the source's non-null branch and $\widetilde H_{mn}=H^*_{mnl}\partial^la/\sqrt{-(\partial a)^2}$. The source-reported local fermionic transformations are
$$i_\kappa E^{\underline\alpha} =\kappa^{\underline\beta}(1+\bar\Gamma)_{\underline\beta}{}^{\underline\alpha}, \qquad i_\kappa E^{\underline a}=0,\qquad \delta_\kappa H=-i_\kappa dC^{(3)}.$$
The source gives the proposed matrix
$$\sqrt{-\det(g+i\widetilde H)}\,\bar\Gamma =\sqrt{-g}\left[ \Gamma^{(6)} +\frac{i}{2\sqrt{-(\partial a)^2}}\widetilde H^{mn}\Gamma_{mn}\Gamma_p\partial^pa +\frac{1}{8(\partial a)^2} \partial^{m_1}a\,\varepsilon_{m_1m_2m_3m_4m_5m_6} \widetilde H^{m_2m_3}\widetilde H^{m_4m_5} \Gamma^{m_6}\Gamma_p\partial^pa \right].$$
Here $\Gamma_m$ and $\Gamma_{m_1\cdots m_k}$ are the pulled-back gamma matrices and their antisymmetrized products defined above; $\varepsilon$ has the lowered-tensor convention specified above, while $e$ in the Hodge formula is the alternating symbol. The paper presents $\bar\Gamma$ as its proposed involution, reports the action as $\kappa$ invariant, and expressly postpones the detailed proof. This item records the proposal and exact source interface; it does not independently verify $\bar\Gamma^2=1$, the variation, or compatibility with the current component CJS convention. It is restricted to a single five-brane.

## Statement References

[Bandos et al., pp. 2–4, equations (1)–(12), footnote 2](https://arxiv.org/pdf/hep-th/9701149v2)

## Facts & Assumptions

**Given:** The source-reported superspace field content and constraints, one M5, and the source's metric and potential conventions.

[F1] The A-page M5 item defines the bosonic PST scalar functional by the source’s Eq. (1), the explicit field-strength substitution preceding Eq. (17), and its Wess–Zumino addition; its nonlinear dynamics remain source-reported rather than independently varied ([[def-m5-brane-worldvolume-tensor-action]]).

[F2] The current CJS postulate fixes the separate component supergravity convention used only for comparison; it does not supply or identify the target supercoframe or source potentials above ([[post-eleven-dimensional-cjs-supergravity-action]]).

[A1] The Bandos et al. superspace torsion and four- and seven-form constraints, source signature, right-acting exterior derivative, and imaginary gamma-matrix conventions are adopted exactly as source assumptions; no conversion to R4 is supplied here.

[A2] The source explicitly says the detailed proof of $\kappa$ invariance is postponed.

## Remarks

The chart, finite-Grassmann realization, differential algebra and body-domain prescriptions above are local mathematical specifications for this source report, rather than definitions quoted verbatim from the letter. They assert no existence theorem for the constrained background, no global gluing of potential patches and no identification with the CJS convention. On a compact boundaryless worldvolume a globally real auxiliary body scalar has a critical point; consequently the everywhere negative-norm branch has no such global configuration. The local formulation and compactly supported action differences remain the relevant interpretation. No observations or statistical inference are supplied.

Bandos et al. state that only results are presented and that the detailed $\kappa$-invariance proof is postponed to a forthcoming paper. The source's overall signs and $\sqrt{-(\partial a)^2}$ convention differ in display from the PST bosonic convention above; no silent sign conversion is made. The exact projector is transcribed as source-reported, while its involution and action variation remain unproved here.
