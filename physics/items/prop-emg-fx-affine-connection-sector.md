---
id: prop-emg-fx-affine-connection-sector
kind: proposition
title: "Fixed-topology affine sector of normalized circle connections"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-local-potentials-and-circle-data
  - lem-emg-circle-connection-gluing
  - prop-gauge-transformations-act-on-principal-connections
  - thm-the-exterior-derivative-commutes-with-pullback
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  prop-gauge-transformations-act-on-principal-connections: mathematical-premise
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "David Tong, Gauge Theory, Cambridge Part III lecture notes (2018), §§1.1.1–1.1.2"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "Complete 457-page notes retrieved. §1.1.2, 'A Patchwork of Gauge Fields,' printed pp. 6–8 (PDF pp. 17–19); the preceding §1.1.1 was checked to separate its quantum phase premise from the geometric connection convention."
    - title: "Scott Morrison, Connections on Principal Fibre Bundles (2000)"
      url: "https://tqft.net/papers/ConnectionsAndBundles.pdf"
      locator: "Complete 18-page paper inspected. §§3.1–3.3, §5.1, and §§7.1–7.3: principal-bundle charts, horizontal connections, connection forms, local representatives, curvature, and gauge conventions."
---

## Statement

Assume $\mathrm{AC}_\omega$ for the smooth tangent-bundle and principal-connection convention. Let $(M,g,N,o)$ be the smooth, Hausdorff, second-countable, oriented and time-oriented Lorentzian four-manifold used for normalized circle-connection data. Fix a smooth right principal $U(1)$ bundle $P\to M$, one countable trivializing cover $(U_i)$ with transition functions $g_{ij}$ in the convention $z_j=g_{ij}^{-1}z_i$, and one normalization constant $\kappa_0>0$ measured in webers. Let $(a_i)$ and $(a_i')$ be two smooth normalized connection representatives for this same atlas, each satisfying $a_j=a_i+\lambda(g_{ij})$ and $a_j'=a_i'+\lambda(g_{ij})$, where $\lambda(g):=-i g^{-1}dg$. In length-coordinate charts, the components of $a_i$ and $a_i'$ have units $\mathrm m^{-1}$; the physical potentials $A_i=\kappa_0a_i$ and $A_i'=\kappa_0a_i'$ have components $\mathrm{Wb}\,\mathrm m^{-1}$.

Then $\alpha_i:=a_i'-a_i$ is the restriction of a unique smooth global real one-form $\alpha$ on $M$. The normalized curvatures $f|_{U_i}=da_i$ and $f'|_{U_i}=da_i'$ are global, and $f'-f=d\alpha$. The physical curvatures $F=\kappa_0 f$ and $F'=\kappa_0 f'$ satisfy $F'-F=\kappa_0d\alpha$; in length-coordinate charts their components have units $\mathrm{Wb}\,\mathrm m^{-2}$. Consequently $\int_S\iota^*F'=\int_S\iota^*F$ for every compact oriented smooth surface $S$ without boundary and smooth embedding $\iota:S\hookrightarrow M$. The representatives on a fixed bundle and atlas form an affine space over $\Omega^1(M)$.

For a smooth local gauge map $\Phi_h(x,z)=(x,h(x)z)$, the adopted pushforward action on horizontal distributions changes the local representative by $a_i\mapsto a_i-\lambda(h)$; this sign is part of the stated convention.

## Statement references

[[def-emg-local-potentials-and-circle-data]]

[[lem-emg-circle-connection-gluing]]

[[prop-gauge-transformations-act-on-principal-connections]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a fixed smooth right principal $U(1)$ bundle with the stated countable atlas, two compatible smooth normalized circle-connection families, and the fixed normalization $\kappa_0$.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts that every at most countable family of nonempty sets has a choice function. It is used only to meet the smooth tangent-bundle and principal-connection convention required by [F3]; the overlap, curvature, surface-integration, and local sign calculations below make no selections.

[F1] [[def-emg-local-potentials-and-circle-data]]: a normalized circle-connection datum has transitions $g_{ij}$ with $g_{ij}g_{jk}=g_{ik}$, local real one-forms with $a_j=a_i+\lambda(g_{ij})$, $\lambda(g)=-ig^{-1}dg$, and physical local potential $A_i=\kappa_0a_i$ with $\kappa_0$ in webers.

[F2] [[lem-emg-circle-connection-gluing]]: the compatible local data construct a smooth principal connection with local connection form $\eta+a_i$, where $\eta=-iz^{-1}dz$; for fixed transition functions, local-form differences patch to one global base one-form, and adding any global base one-form preserves the fixed bundle sector.

[F3] [[prop-gauge-transformations-act-on-principal-connections]]: a smooth gauge transformation acts on horizontal distributions by $H\mapsto d\Phi(H)$.

[F4] [[thm-the-exterior-derivative-commutes-with-pullback]]: for every smooth map $F$ and differential form $\omega$, $d(F^*\omega)=F^*(d\omega)$.

[F5] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]: on a compact oriented smooth manifold without boundary, integration of a smooth top form is defined by finite chart localization and the integral of an exact top form is zero.

[F6] [[lem-emg-lorentz-hodge-calculus]]: the exterior derivative is a graded derivation of the wedge product; in particular, local product and inverse formulas for circle-valued functions use the ordinary product rule.

## Proof

1.1 On each overlap $U_i\cap U_j$, compatibility gives $\alpha_j=a_j'-a_j=(a_i'+\lambda(g_{ij}))-(a_i+\lambda(g_{ij}))=\alpha_i$. The forms therefore agree on overlaps and define one global smooth real one-form $\alpha$; uniqueness follows because the $U_i$ cover $M$. No global phase lift of any transition function is chosen. [given, A1, F1, algebra]

1.2 Conversely, if $\alpha\in\Omega^1(M)$ is any smooth global real one-form, then $(a_i+\alpha|_{U_i})_i$ obeys $(a_j+\alpha|_{U_j})=(a_i+\alpha|_{U_i})+\lambda(g_{ij})$ because the restrictions of $\alpha$ agree on overlaps. Thus translation by $\alpha$ stays in the same bundle sector, and the set of representatives is affine over $\Omega^1(M)$. [F1, F2, algebra]

2.1 By the curvature definitions in [F2], on every $U_i$ we have $f'-f=da_i'-da_i=d(a_i'-a_i)=d\alpha|_{U_i}$. Both sides are global, so the local equalities give $f'-f=d\alpha$ on $M$. Multiplying by the same constant $\kappa_0$ gives $F'-F=\kappa_0d\alpha$. [F1, F2, step 1.1, algebra]

3.1 For a compact oriented smooth surface $S$ without boundary, pullback commutes with $d$ by [F4], so $\iota^*(F'-F)=\kappa_0d(\iota^*\alpha)$. The one-form $\iota^*\alpha$ has compact support because $S$ is compact; [F5] therefore gives $\int_S\iota^*(F'-F)=\kappa_0\int_Sd(\iota^*\alpha)=0$. Hence the physical curvature integrals agree. [F4, F5, step 2.1, algebra]

4.1 On a trivializing chart, let $\Phi_h(x,z)=(x,h(x)z)$. Its inverse sends $(x,z)$ to $(x,h(x)^{-1}z)$. The connection form for the pushed-forward horizontal distribution is $(\Phi_h^{-1})^*\omega$, because its kernel is $d\Phi_h(\ker\omega)$. With $\omega=\eta+a_i$ from [F2] and $\eta=-iz^{-1}dz$, the product rule [F6] gives $(\Phi_h^{-1})^*\eta=\eta-\lambda(h)$ and hence $a_i'=a_i-\lambda(h)$. This is the pushforward sign; a pullback action by $\Phi_h$ instead has the opposite sign. [given, A1, F1, F2, F3, F6, algebra] ∎

## Remarks

The finite-chart diagram records the affine translation of a connection representative and the resulting curvature translation. It summarizes step 1.2 and step 2.1; the proof does not rely on the diagram.

~~~tikzcd
\mathcal A(P) \arrow[r,"T_\alpha"] \arrow[d,"F_{\mathrm{phys}}"'] &
\mathcal A(P) \arrow[d,"F_{\mathrm{phys}}"] \\
\Omega^2(M) \arrow[r,"+\kappa_0\,d\alpha"'] & \Omega^2(M)
~~~

Here $\mathcal A(P)$ is the affine set of normalized connections on the fixed bundle and atlas, $T_\alpha$ adds the global one-form $\alpha$ to every local representative, and $F_{\mathrm{phys}}$ sends a connection to its global physical curvature. Step 2.1 proves that $F_{\mathrm{phys}}(T_\alpha a)=F_{\mathrm{phys}}(a)+\kappa_0d\alpha$, which is exactly the commutativity asserted by the square. The proposition does not classify bundle sectors or claim that every flat difference is gauge trivial.
