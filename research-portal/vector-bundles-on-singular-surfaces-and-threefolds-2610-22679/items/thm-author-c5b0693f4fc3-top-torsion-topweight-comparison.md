---
id: thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
kind: theorem
title: External canonical top-weight motivic-to-syntomic comparison
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  thm-author-c5b0693f4fc3-top-torsion-em-syntomic: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Elden Elmanto, Zero cycles on singular varieties (joint work with Matthew
        Morrow), Algebraic K-theory, Oberwolfach Report 36/2025
      url: https://ems.press/content/serial-article-files/52244
      doi: 10.4171/OWR/2025/36
      locator: Theorem 4 and its proof, printed p.1995/PDF47; notation and comparison
        Theorem3, printed1994/PDF46; application printed1996/PDF48
      hypotheses: X any finite-type scheme over an algebraically closed field k,
        j>=dim(X), any prime ℓ; no smoothness or reducedness assumption in
        Theorem4.
      statement: The canonical motivic-to-syntomic map Z(j)_mot(X)/ℓ → F_ℓ(j)_syn(X)
        is an equivalence in this range; for ℓ invertible syntomic is étale
        cohomology with µ_ℓ^⊗j.
      reading_limits: "This adjudication read the published report, printed
        pp.1994–1996 (PDF pp.46–48), using its extracted text: Theorems 1, 3 and
        4, the full Theorem 4 proof, and the application. No standalone-author
        version was reread. The comparison theorem and its deep field/rigidity
        inputs are imported, not reconstructed."
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 4.28 and proof, printed p.29; Definition 4.29, Remarks
        4.30–4.31, map (4.7), Corollary 4.32 and proof, printed p.30
      hypotheses: Any qcqs F_p-scheme; nonnegative weight; use r=1.
      statement: The cdh-localized étale logarithmic-forms corner is éh cohomology,
        and the canonical comparison cofiber is RΓ_cdh(X,νtilde_1(j))[−j−1].
      reading_limits: Read these passages in the v1 extracted text. The PDF screenshot
        fetch failed; no visual reading of its diagrams is claimed. Did not
        reconstruct underlying TC, de Rham–Witt, or rigidity results.
dependency_level: 10
---

## Statement
Let $k$ be algebraically closed, $X$ a finite-type $k$-scheme, $j\geq\dim X$, and $\ell$ any prime. The canonical map of Elmanto–Morrow complexes
$$\mathbb Z(j)_{\rm mot}(X)\otimes^{\mathbf L}\mathbb Z/\ell\longrightarrow\mathbb F_\ell(j)_{\rm syn}(X)$$
is an equivalence. If $\ell$ is invertible in $k$, the target is $R\Gamma_{\acute et}(X,\mu_\ell^{\otimes j})$. If $\ell=\operatorname{char}k$, the target is the derived syntomic theory specified in [[thm-author-c5b0693f4fc3-top-torsion-em-syntomic]].

## External input
Import the published report Theorem4, not its application to torsion-freeness. Its proof uses Artin vanishing at invertible primes. In characteristic $p$, it kills the cdh Artin–Schreier obstruction by henselian rigidity and the Kato–Kuzumaki bound for residue fields of transcendence degree at most $j$ over an algebraically closed field. Interpret that obstruction through the precise fiber sequence in [[thm-author-c5b0693f4fc3-top-torsion-em-syntomic]]. Thus this input concerns the actual map and specified EM theory, not merely abstractly isomorphic groups. The report's proof, not a purported reconstruction of the deeper field/rigidity results, is imported. Theorem4 has no reducedness hypothesis.

## Source qualification
In the published report, Theorem 3(2), printed p.1994, has an étale lower-right corner; EM v1 Theorem 4.28, printed p.29, has the éh corner, identified there with the cdh localization of the étale presheaf. We retain this as a qualified discrepancy and do not import the report's printed square on arbitrary singular schemes. The precise comparison is supplied by [[thm-author-c5b0693f4fc3-top-torsion-em-syntomic]].

The report's characteristic-$p$ proof of Theorem 4, printed p.1995, describes the cofiber without its shift. With its cited Artin–Schreier obstruction convention, EM v1 Corollary 4.32 gives the cofiber $R\Gamma_{\rm cdh}(X,\widetilde\nu_1(j))[-j-1]$. This is a confirmed nonfatal source-display omission: vanishing of the obstruction also kills its shift. It does not refute Theorem 4, whose full finite-type scope is retained. The reducedness premise of the separate Theorem 1 is not a premise of Theorem 4.
