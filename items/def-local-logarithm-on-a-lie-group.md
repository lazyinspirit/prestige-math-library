---
id: def-local-logarithm-on-a-lie-group
kind: definition
title: Local logarithm on a Lie group
status: published
origin: pipeline
deps: ["def-countable-choice", "cor-the-exponential-map-is-a-local-diffeomorphism-at-zero"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 3.7(2), printed page 30
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Assume $\mathrm{AC}_\omega$, let $G$ be a finite-dimensional real Lie group
with identity $e$, and write $\mathfrak g=T_eG$. Fix open neighborhoods
$V\subseteq\mathfrak g$ of $0$ and $U\subseteq G$ of $e$ for which

$$\exp_G|_V:V\longrightarrow U$$

is the diffeomorphism supplied by
[[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]. The **local
logarithm associated with $(V,U)$** is its smooth inverse

$$\log_G:U\longrightarrow V.$$

Thus $\log_G(\exp_G X)=X$ for $X\in V$ and
$\exp_G(\log_G g)=g$ for $g\in U$. The neighborhoods are part of the notation:
no value of $\log_G$ is asserted outside $U$, and no global logarithm is
claimed.

Here $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]. It is
inherited exactly through the local-diffeomorphism supplier. Fixing one witness
pair $(V,U)$ by existential instantiation is not a choice from a family and
adds no choice principle.

The neighborhood $U$ contains $e$ and is nonempty. If $\dim G=0$, one may take
$V=\{0\}$ and $U=\{e\}$ and the logarithm is the unique inverse; the definition
is unchanged in dimension one. Open neighborhoods rather than closed
intervals are involved, so there is no endpoint case. No metric or
nondegeneracy condition occurs. The two inverse identities unpack the phrase
"inverse map" and do not assert a biconditional characterization.
