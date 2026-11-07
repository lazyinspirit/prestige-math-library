---
id: thm-torsion-lefschetz-trace-formula-for-constructible-sheaves-on-smooth-proper-curves
kind: theorem
title: "Lefschetz trace formula for constructible torsion complexes on smooth proper curves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-etale-sheaf-of-finite-modules
  - def-constructible-etale-sheaf-of-finite-modules
  - def-smooth-curve-over-finite-field
  - thm-local-duality-for-torsion-etale-sheaves-on-regular-curves
  - thm-proper-base-change-and-finiteness-for-constructible-torsion-etale-sheaves
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé III B, §1, Corollary 1.3"
      url: "https://grothendiecksga.com/read/sga5/en/IIIB-1.html"
    - title: "Grothendieck et al., SGA 5, Exposé III B, §4, proof of Theorem 1.2"
      url: "https://grothendiecksga.com/read/sga5/en/IIIB-4.html"
---

## Statement

Let $k$ be an algebraically closed field of characteristic $p$, let $\ell\ne p$ be a prime, put $\Lambda=\mathbb Z/\ell^n\mathbb Z$ for an integer $n\ge1$, and let $C$ be a smooth proper geometrically connected curve over $k$. Let $h:C\to C$ be a morphism whose fixed-point scheme is finite and whose graph meets the diagonal with local intersection multiplicity one at every fixed point. Let $K$ be a bounded constructible complex of étale $\Lambda$-modules of finite Tor-amplitude over $\Lambda$, with perfect geometric stalk complexes, and let $u:h^*K\to K$ be a morphism. Here finite Tor-amplitude means that there are integers $a\leq b$ such that, for every sheaf $M$ of $\Lambda$-modules placed in degree zero, $K\otimes^L_\Lambda M$ has cohomology only in degrees $a,\ldots,b$. Define $\Phi$ on $R\Gamma(C,K)$ as the composite induced by $R\Gamma(C,K)\xrightarrow{h^*}R\Gamma(C,h^*K)\xrightarrow{R\Gamma(u)}R\Gamma(C,K)$. For every fixed point $x$, let $u_x$ be the endomorphism induced on the perfect geometric stalk complex $K_x$. Taking categorical traces of endomorphisms of perfect $\Lambda$-complexes, one has
$$\operatorname{Tr}(\Phi\mid R\Gamma(C,K))=\sum_{x\in C^h}\operatorname{Tr}(u_x\mid K_x).$$

## Statement references

[SGA 5, Exposé III B, §1, Corollary 1.3](https://grothendiecksga.com/read/sga5/en/IIIB-1.html)

[SGA 5, Exposé III B, §4, Theorem 1.2 and its proof](https://grothendiecksga.com/read/sga5/en/IIIB-4.html)

## Remarks

The finite Tor-amplitude and perfect-stalk hypotheses are the constructible finite-Tor category of the cited source. They allow singular constructible objects such as extension by zero of a finite-free lisse sheaf and a finite-free skyscraper sheaf. They do not require the cohomology sheaves to be locally constant across the whole curve. The geometric trace and proper-cohomology perfectness proofs remain local authoring obligations; the coefficient trace-limit lemma alone does not supply them.
