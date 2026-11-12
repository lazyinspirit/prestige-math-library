---
id: thm-adjudicate-ff468282ce0d-spectral-pairing-sign
kind: theorem
title: External spectral pairings and the integer sphere-interchange sign
status: published
domain: mathematics
external_input: true
deps:
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
dependency_roles:
  def-stable-spectra-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Bastiaan Cnossen, Stable Homotopy Theory and Higher Algebra
      url: https://bastiaancnossen.com/notes/stable-homotopy-higher-algebra/section/day-convolution-and-the-tensor-product-of-spectra/the-symmetric-monoidal-structure-on-sp/index.html
      locator: "Section 16.6.2, Definition 16.6.6 and Observation 16.6.7 with its
        explanation; HTML revision 6 November 2026. Linked basic calculation:
        Warning 4.2.11."
      statement: Integer homotopy groups have natural bilinear smash pairings,
        compatible with associativity, units and Koszul symmetry, including
        negative degrees.
      hypotheses: The ordinary symmetric monoidal infinity-category of spectra under
        smash, arbitrary spectra and all integer shifts. Retain the fixed
        universe and ZFC assumptions of the declared spectra interface; no
        connectivity or sequential-prespectrum multiplication hypothesis.
      reading_limits: Freshly read Section 16.6.2, including the full explanation of
        Observation 16.6.7, and linked Warning 4.2.11 on the primary author
        website. Checked that Section 16.6 uses reduced excisive functors and
        the sphere-unit separately colimit-preserving smash, as does the
        declared interface. Import these results; earlier monoidal and
        stabilization foundations are not reconstructed. No monoidal comparison
        with sequential prespectra is claimed.
dependency_level: 4
formulation_deps:
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
argument_deps:
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and the fixed size conventions of the stable spectra interface. For spectra $E,F$ and integers $u,v$, smashing representatives gives natural bilinear pairings
$$\pi_u(E)\times\pi_v(F)\longrightarrow\pi_{u+v}(E\wedge F).$$
They respect associativity and the sphere unit. Under symmetry $\tau:E\wedge F\to F\wedge E$, one has $\tau_*(x\wedge y)=(-1)^{uv}(y\wedge x)$. Equivalently, interchanging $\mathbb S[u]$ and $\mathbb S[v]$ acts by $(-1)^{uv}$ on $\mathbb S[u+v]$, also for negative integers.

## External input
Reference 0 imports the pairings and symmetry law. [[def-stable-spectra-interface]] supplies spectra, homotopy groups, integer suspension and smash in the same category. Retain [[math:def-axiom-of-choice]] and the interface's size assumptions. No local proof is claimed.
