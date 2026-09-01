---
page: p-np-conp-and-polynomial-reductions
title: "P, NP, coNP, and Polynomial Reductions"
status: draft
items:
  - def-p
  - def-polynomially-balanced-verifier
  - def-np-by-verifiers
  - thm-verifier-and-nondeterministic-definitions-of-np-agree
  - def-conp
  - prop-p-is-contained-in-np-intersection-conp
  - def-polynomial-time-many-one-reduction
  - lem-polynomial-reductions-compose
  - thm-polynomial-reductions-transfer-p-np-and-conp-membership
  - def-np-hard-and-np-complete
  - prop-an-np-complete-language-in-p-implies-p-equals-np
  - def-search-version-of-an-np-relation
  - thm-sat-search-reduces-to-sat-decision
  - def-exp-and-nexp
  - prop-np-is-contained-in-pspace-and-pspace-in-exp
examples:
  - fs-np-means-not-polynomial
  - fs-np-complete-means-known-not-in-p
---

This page fixes the basic complexity classes and the reduction language that
later completeness proofs rely on. It defines $P$, the verifier form of $NP$,
and $coNP$, proves that the verifier and nondeterministic formulations of $NP$
agree, and then isolates polynomial-time many-one reductions as the comparison
tool that transfers class membership backward along efficient encodings.

The second half turns that framework into the standard complexity consequences:
the meaning of NP-hardness and NP-completeness, the consequence that an
NP-complete language in $P$ would collapse $P$ and $NP$, the self-reducibility
of SAT at the search-versus-decision level, and the elementary containment
picture $NP\subseteq PSPACE\subseteq EXP$. The two false statements close by
separating the class names from common slogans that overclaim what is actually
proved.
