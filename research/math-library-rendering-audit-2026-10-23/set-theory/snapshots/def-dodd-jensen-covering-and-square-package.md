---
id: def-dodd-jensen-covering-and-square-package
kind: definition
title: "The Dodd-Jensen covering and square package"
status: published
origin: pipeline
deps: [def-cardinal, def-axiom-of-choice, def-aleph-and-beth-hierarchies]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Chris Good, Large cardinals and small Dowker spaces"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/large.pdf"
      locator: "Definitions 3-6, Theorem 7, and Lemmas 8, 11-12, printed pp. 2-4"
    - title: "A. J. Dodd and R. B. Jensen, The core model"
      url: "https://doi.org/10.1016/0003-4843(81)90011-5"
      locator: "Core-model construction and square sequences, Annals of Mathematical Logic 20 (1981), pp. 43-75"
    - title: "A. J. Dodd and R. B. Jensen, The covering lemma for K"
      url: "https://doi.org/10.1016/0003-4843(82)90013-4"
      locator: "Covering theorem for the Dodd-Jensen core model, Annals of Mathematical Logic 22 (1982), pp. 1-30"
verification:
  audited: 2026-09-22
---

## Definition

Work in $\mathrm{ZFC}$ and let $K$ denote the Dodd-Jensen **core model**, an
inner model containing the constructible universe and contained in $V$
([[def-cardinal]]). The **Dodd-Jensen covering and square package for $K$**
consists of the following interface statements.

1. **Covering.** $\operatorname{Cov}(V,K)$: every uncountable set $X$ of ordinals
   in $V$ is contained in a set $Y \in K$ with $|Y| = |X|$ (the covering lemma
   of Dodd-Jensen).
2. **GCH in $K$ and square.** $K$ satisfies the generalised continuum
   hypothesis, and for every infinite cardinal $\lambda$ of $K$ there is a
   square sequence $\square_\lambda$ in $K$: a sequence
   $\langle C_\alpha : \alpha < \lambda^+,\ \lim(\alpha) \rangle$ with each $C_\alpha$
   club in $\alpha$, $\operatorname{otp}(C_\alpha) < \lambda$ whenever
   $\operatorname{cf}(\alpha) < \lambda$, and $C_\beta = \beta \cap C_\alpha$
   whenever $\beta < \alpha$ is a limit point of $C_\alpha$ ([[def-cardinal]]).
3. **Singular strong limits.** $\operatorname{Cov}(V,K)$ implies that there is an
   uncountable strong limit cardinal $\kappa$ of countable cofinality with
   $2^\kappa = \kappa^+$ and with a square sequence $\square_\kappa$ (Good,
   Lemma 8).
4. **Weak diamond on the countable-cofinality points.** Let
   $W := \{\, \alpha < \kappa^+ : \operatorname{cf}(\alpha) = \omega \,\}$. From
   $\square_\kappa$ and $2^\kappa = \kappa^+$ one has $\diamondsuit_{\kappa^+}(W)$:
   a sequence $\langle S_\alpha : \alpha \in W \rangle$ with $S_\alpha \subseteq \alpha$
   such that for every $X \subseteq \kappa^+$ the set
   $\{\alpha \in W : X \cap \alpha = S_\alpha\}$ is stationary in $\kappa^+$
   (Good, Lemma 11, after Devlin).
5. **Nonreflecting stationary set.** From $\square_\kappa$ and
   $\diamondsuit_{\kappa^+}(W)$ there is a stationary $E \subseteq W$ with
   $\square_\kappa(E)$, the assertion of Good's Definition 3: there is a
   sequence $\langle C_\alpha : \alpha < \kappa^+,\ \lim(\alpha)\rangle$ with
   each $C_\alpha$ club in $\alpha$, $\operatorname{otp}(C_\alpha) < \kappa$
   whenever $\operatorname{cf}(\alpha) < \kappa$, and such that for every limit
   point $\beta$ of $C_\alpha$ one has $\beta \notin E$ and
   $C_\beta = \beta \cap C_\alpha$; the clause $\beta \notin E$ is the one from
   which Good derives that a stationary $E$ with $\square_\kappa(E)$ is
   nonreflecting. In addition $\{\alpha \in E : X \cap \alpha = S_\alpha\}$ is
   stationary for every $X \subseteq \kappa^+$ (Good, Lemma 12, exactly item
   IV.2.10 of Devlin's *Constructibility*).

Statement 1 is the covering theorem of Dodd-Jensen; statements 2, 4 and 5 are
fine-structural consequences recorded with the exact citations above. The
package is the input of
[[thm-dodd-jensen-covering-supplies-fleissner-hyp-data]]; the deep covering
theorem itself is not reproved in this library, and no clause of the package is
asserted to be a theorem of $\mathrm{ZFC}$ without the hypothesis "no inner
model with a measurable cardinal" that supplies it.

## Remarks

- **No measurable cardinal is constructed here.** The package is a conditional
  consequence of the nonexistence of inner models with measurable cardinals;
  the definition records the objects and their properties, not the inner-model
  construction that produces them.

- **Ordinals and clubs.** Clubs and stationarity are taken in the ordinal
  spaces $\lambda^+$ with the order topology; "nonreflecting" means
  $E \cap \beta$ is nonstationary in $\beta$ for every $\beta < \kappa^+$
  ([[def-cardinal]]).

- **AC is used throughout**, in the comparison of cardinalities, the choice of
  nonlimit ladders and the standard cardinal arithmetic ([[def-axiom-of-choice]]).
