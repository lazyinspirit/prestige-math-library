---
id: post-cmp-heterotic-cohomology-spectrum-dictionary
kind: postulate
title: Heterotic massless matter and bundle-cohomology dictionary
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 9
deps:
  - def-cmp-heterotic-cy3-bundle-compactification
  - def-cmp-heterotic-associated-vector-bundle
  - def-e-valued-dolbeault-operators-and-ltwo-structure
  - post-heterotic-type-i-ten-dimensional-n1-supergravity-action
dependency_roles:
  def-cmp-heterotic-cy3-bundle-compactification: formulation-prerequisite
  def-cmp-heterotic-associated-vector-bundle: mathematical-premise
  def-e-valued-dolbeault-operators-and-ltwo-structure: formulation-prerequisite
  post-heterotic-type-i-ten-dimensional-n1-supergravity-action: formulation-prerequisite
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Philip S. Candelas, Gary T. Horowitz, Andrew Strominger, and Edward Witten, Vacuum Configurations for Superstrings"
      url: "https://ooguri.caltech.edu/documents/31340/Candelas_Horowitz_Strominger_Witten.pdf"
      locator: "Introduction and §4, journal pp. 47–49 and 62–65 (PDF pp. 2 and 17–20): charged matter in the heterotic bundle compactification and the standard-embedding representation assignment."
    - title: "Angel M. Uranga, String Theory: A Graduate Course, Lecture 9: Calabi–Yau compactification and Heterotic String phenomenology"
      url: "https://members.ift.uam-csic.es/auranga/lect13.pdf"
      locator: "PDF pp. 20–23: heterotic bundle-cohomology index, E8 branching and the convention-dependent chirality sign."
    - title: "Lara B. Anderson, James Gray, Dan Grayson, Yang-Hui He, and André Lukas, Yukawa Couplings in Heterotic Compactification"
      url: "https://arxiv.org/pdf/0904.2186v1"
      locator: "PDF p.4, introduction paragraph identifying families with H1(X,V) and antifamilies with H2(X,V); PDF p.5, §2 preamble and equation (2.1), and PDF p.6, Table 1 and start of §2.1: gauge-adjoint branching into structure-group and gauge-centralizer representations, associated-bundle harmonic one-forms and conjugate-sector assignments. Physical lowest-order smooth Calabi–Yau matter input; no new mathematical theorem is imported."
physical_scope: "Adopted gauge-adjoint matter dictionary with explicit bundle-structure/unbroken-gauge representation pairing, at leading tree-level, two-derivative zero-mode order in a smooth heterotic bundle phase, with constant dilaton coupling g_str=exp(Phi_0) tending to zero and alpha'/L^2 tending to zero at fixed smooth internal shape and bundle. Corrections and finite-parameter error bounds are not supplied; singular, non-geometric and arbitrary string vacua are outside scope."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the following physical input for a selected weakly coupled, large-radius perturbative heterotic compactification on a smooth compact Calabi–Yau threefold $X$ with holomorphic gauge bundle $P\to X$. Use the compact structure group $H$, its complexification $H_{\mathbb C}$ and embedding $\iota:H\hookrightarrow G_{\mathrm{het}}$ supplied by the compactification datum. Define the unbroken gauge group to be the centralizer $K:=\{k\in G_{\mathrm{het}}:k\iota(h)=\iota(h)k\text{ for every }h\in H\}$. Fix an actual decomposition of the complexified ten-dimensional gauge Lie algebra, under the commuting adjoint actions of $H$ and $K$, as $\mathfrak g_{\mathrm{het}}\otimes_{\mathbb R}\mathbb C\cong\bigoplus_a(W_a\otimes_{\mathbb C}U_a)$. Here each $U_a$ carries an irreducible finite-dimensional complex representation $R_a$ of $K$, and each $W_a$ is its full multiplicity space carrying an $H$ representation with a specified holomorphic extension $\rho_a:H_{\mathbb C}\to\mathrm{GL}(W_a)$. Summands with isomorphic $K$ representations are combined into one full multiplicity space. Select a conjugate pair of complex matter sectors with $R=R_a$ not isomorphic to its conjugate $\overline R$, and require the paired structure representation to be $\rho_a^\vee$; the conjugate representation acts on the conjugate vector space by complex-conjugate matrices. Self-conjugate gauge representations require their own reality constraints and are not counted as two distinct conjugate species here. Write $\rho_R:=\rho_a$ as a sector label: $R$ is a representation of $K$, whereas $\rho_R$ is a representation of $H_{\mathbb C}$. Fix orientation and four-dimensional chirality convention. Let $g_{ij}$ be the holomorphic transition maps of $P$ in local trivializations; $V_R$ is the holomorphic bundle with transition maps $(x,v)\mapsto(x,\rho_R(g_{ij}(x))v)$. The subbundle $T_X^{0,1}\subset TX\otimes_{\mathbb R}\mathbb C$ is the $-i$ eigensubbundle of the complex-linear extension of the complex structure. For each $q=0,1,2,3$, let $\mathcal A^{0,q}(X,V_R)=\Gamma^\infty(X,\Lambda^q(T_X^{0,1})^*\otimes V_R)$ be the space of smooth global $(0,q)$-forms with values in $V_R$. Its global Dolbeault operator $\bar\partial_{V_R}:\mathcal A^{0,q}(X,V_R)\to\mathcal A^{0,q+1}(X,V_R)$ acts in a local holomorphic frame by $\bar\partial_{V_R}(\sum_J s_Jd\bar z^J)=\sum_{j,J}(\partial s_J/\partial\bar z^j)d\bar z^j\wedge d\bar z^J$. Holomorphic transition functions make these local operators agree on overlaps, and $\bar\partial_{V_R}^2=0$. Define
$$H_{\bar\partial}^q(X,V_R):=\ker(\bar\partial_{V_R}:\mathcal A^{0,q}\to\mathcal A^{0,q+1})/\operatorname{im}(\bar\partial_{V_R}:\mathcal A^{0,q-1}\to\mathcal A^{0,q}),\qquad h^q(X,V_R):=\dim_{\mathbb C}H_{\bar\partial}^q(X,V_R),$$
with $\mathcal A^{0,-1}=\mathcal A^{0,4}=0$. In the library's declared chirality convention, when the endpoint groups $H_{\bar\partial}^0$ and $H_{\bar\partial}^3$ vanish, degree $q=1$ in $V_R$ counts multiplets in $R$ and degree $q=2$ counts multiplets in the conjugate $K$ representation $\overline R$, counted with opposite sign in the net chiral index; their multiplicities are $h^1(X,V_R)$ and $h^2(X,V_R)$, respectively. Both counts use the same chosen four-dimensional chiral-multiplet convention. Replacing $V_R$ by its dual selects the paired adjoint sector and exchanges the two representation assignments. This degree-to-representation assignment, like the weak-coupling and large-radius approximation, is an adopted physical input, not a theorem of pure mathematics. The postulate applies only in the stated smooth large-radius phase and does not identify all string vacua with smooth bundle compactifications.

Precisely, use natural units and a constant dimensionless dilaton $\Phi_0$, with dimensionless coupling $g_{\mathrm{str}}=e^{\Phi_0}>0$. Fix a smooth positive internal metric $g_0$ in dimensionless coordinates on $X$, the complex structure and holomorphic bundle data, and use the string-frame metrics $g_L=L^2g_0$, where $L>0$ has length dimension and $\alpha'>0$ has length-squared dimension. Large radius means the formal limit $\varepsilon=\alpha'/L^2\to0$ at this fixed smooth shape, rather than large volume with collapsing cycles. Weak coupling means $g_{\mathrm{str}}\to0$. Adopt the dictionary at leading tree level and in the two-derivative, linearized massless-mode approximation in this joint regime; loop, higher-derivative and nonperturbative corrections to this mode interpretation are omitted. No numerical smallness threshold, finite-parameter error bound or guarantee that an unprotected massless state persists after corrections is asserted. The finite-dimensional multiplicities and their representation assignment are assumptions of this leading-order model.

## Postulate references

[[def-cmp-heterotic-cy3-bundle-compactification]]

[[def-cmp-heterotic-associated-vector-bundle]]

[[def-e-valued-dolbeault-operators-and-ltwo-structure]]

[[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]]

## Facts & Assumptions

**Given:** A selected perturbative heterotic branch, a smooth large-radius bundle compactification datum, its gauge embedding and associated representation bundles, and a fixed chirality convention.

[F1] [[def-cmp-heterotic-cy3-bundle-compactification]] requires the bundle, connection, trace, local Bianchi, source, and approximation data to be stated explicitly; it does not prove their existence.

[F2] [[def-cmp-heterotic-associated-vector-bundle]] defines the holomorphic bundle $V_R$ in each finite-dimensional representation.

[F3] [[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]] distinguishes the perturbative heterotic branch from the Type-I branch and supplies only its adopted low-energy field and tree-level dilaton-weight data.

[F4] [[def-e-valued-dolbeault-operators-and-ltwo-structure]] defines the global $V_R$-valued Dolbeault operator, its action in holomorphic frames, and the identity $\bar\partial_{V_R}^2=0$.

[A1] The actual adjoint branching, its full multiplicity spaces, the paired $H_{\mathbb C}$ representations and distinct conjugate $K$ representations are required sector data. An arbitrary representation of the bundle structure group does not by itself label physical gauge matter. The constant-dilaton limit $g_{\mathrm{str}}\to0$, the fixed-shape limit $\varepsilon=\alpha'/L^2\to0$, the leading tree-level two-derivative linearized mode approximation, the finite-dimensional multiplicity interpretation, and the assignment of degrees $1,2$ to $R,\overline R$ are adopted physical assumptions. These limits are the precise meaning of weak coupling and large radius here, without a finite-parameter accuracy claim. The mathematical groups themselves are defined by the global complex in the Postulate. The dictionary is not asserted at singular orbifold or non-geometric loci.

## Remarks

This is a postulate, not an experimentally established result or a mathematical theorem. The signed index in the next item uses the assignment fixed in the Postulate; exchanging the associated bundle with its dual reverses the sign. CHSW and Uranga use different representation-sign conventions, so a source's signed count must be translated through its stated assignment. The examples retain the absolute net-generation count when the source's representation convention is not fixed.
