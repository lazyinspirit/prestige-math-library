---
id: lem-finite-separation-artin-tits-normalisers
kind: lemma
title: Only finitely many hyperplanes separate two Tits-cone points
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - def-separating-hyperplane-artin-tits-normalisers
  - prop-root-length-artin-tits-normalisers
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  def-separating-hyperplane-artin-tits-normalisers: mathematical-premise
  prop-root-length-artin-tits-normalisers: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 8, Lemma 3.5
      statement: For two points in the Tits cone, only finitely many reflecting
        hyperplanes separate them.
      hypotheses: The Coxeter-system and Tits-cone conventions of §2.2; the points may
        lie on the boundary of the cone.
      reading_limits: The frozen extracted text of §2.2 and the statement and opening
        of the proof of Lemma 3.5 were read. This reference attributes the
        claim; it is not a proof premise for the argument below.
dependency_level: 4
---

## Statement

Let $(W,S)$ be a Coxeter system, with geometric roots $\Phi=\Phi^+\sqcup\Phi^-$ in the real vector space with simple-root basis $(\alpha_i)_{i\in\Gamma_0}$, and let $\Theta$ be its algebraic dual with the contragredient action. Put $\overline C=\{h\in\Theta:h(\alpha_i)\geq0\text{ for every }i\in\Gamma_0\}$ and $\mathrm{Cone}=\bigcup_{w\in W}w\overline C$. For $\alpha\in\Phi$ put $H_\alpha=\{h\in\Theta:h(\alpha)=0\}$ and $\mathcal H=\{H_\alpha:\alpha\in\Phi\}$. Say that $H_\alpha$ separates $f,g\in\mathrm{Cone}$ when $f(\alpha)$ and $g(\alpha)$ have opposite strict signs.

For $f,g\in\mathrm{Cone}$, only finitely many hyperplanes in $\mathcal H$ separate $f$ and $g$. The generating set may be infinite; in finite rank these conventions agree with the stated Tits-cone and separation definitions.

## Statement references

[[def-coxeter-data-artin-tits-normalisers]]

[[def-coxeter-arrangement-artin-tits-normalisers]]

[[def-separating-hyperplane-artin-tits-normalisers]]

[[prop-root-length-artin-tits-normalisers]]

## Facts & Assumptions

[F1] Each root has exactly one of the two signs, $\Phi^+=\Phi\cap\sum_i\mathbb R_{\geq0}\alpha_i$ and $\Phi^-=-\Phi^+$. For every $w\in W$, the set $\{\alpha\in\Phi^+:w\alpha\in\Phi^-\}$ has cardinality $\ell(w)$ and is therefore finite. [[prop-root-length-artin-tits-normalisers]]

[F2] Every vector in the geometric representation is a finite linear combination of simple roots. Each root is the image of a simple-root basis vector under an invertible representation map, and $(wh)(v)=h(w^{-1}v)$ for the contragredient action. [[def-coxeter-data-artin-tits-normalisers]]

[F3] In finite rank, the nonnegative chamber, its translates, root hyperplanes and opposite-strict-sign separation are the conventions in the cited definitions. [[def-coxeter-arrangement-artin-tits-normalisers]] [[def-separating-hyperplane-artin-tits-normalisers]]

## Proof
**Given:** The Coxeter system, root notation and points $f,g\in\mathrm{Cone}$ in the Statement.


**Proof technique:** direct.

**Goal:** Show that the set of separating root hyperplanes is finite.

1.1 **Independence of the root representative.** Every root $\beta$ is nonzero, since it is an invertible image of a basis vector by [F2]. A nonzero simple-root coefficient of $\beta$ gives, by scaling the corresponding coordinate functional, an $h_0\in\Theta$ with $h_0(\beta)=1$. For every $h\in\Theta$, the vector $h-h(\beta)h_0$ belongs to $H_\beta$; hence $\Theta=\mathbb R h_0\oplus H_\beta$ and $H_\beta$ is a linear hyperplane. If another root $\gamma$ has $H_\gamma=H_\beta$, applying evaluation at $\gamma$ to this vector gives $h(\gamma)=c h(\beta)$ for all $h\in\Theta$, where $c=h_0(\gamma)$. Evaluation at $\gamma$ is nonzero by the same coordinate argument, so $c\ne0$. Consequently $f(\gamma)g(\gamma)=c^2 f(\beta)g(\beta)$, and opposite strict signs are independent of the root representative. This argument works for any rank and uses only coordinate functionals on the given basis. [F2, algebra, given]

1.2 For any $x\in\mathrm{Cone}$ choose $w\in W$ and $h\in\overline C$ with $x=wh$. If $\alpha\in\Phi^+$ and $x(\alpha)<0$, then $h(w^{-1}\alpha)<0$ by [F2]. A positive root is a finite nonnegative linear combination of simple roots, so $h$ evaluates it nonnegatively. By the sign decomposition in [F1], $w^{-1}\alpha$ must therefore be negative. Hence $\{\alpha\in\Phi^+:x(\alpha)<0\}$ is contained in the finite inversion set $\{\alpha\in\Phi^+:w^{-1}\alpha\in\Phi^-\}$. [F1, F2, given]

2.1 For each separating hyperplane $H_\beta$, one of $\beta$ and $-\beta$ is positive by [F1], and both define the same hyperplane. For that positive root $\alpha$, opposite strict signs imply $f(\alpha)<0$ or $g(\alpha)<0$. Thus every separating hyperplane is the image, under $\alpha\mapsto H_\alpha$, of a member of the union of the two finite sets obtained in 1.2 for $x=f$ and $x=g$. That union and its image are finite, proving the claim. The identification in [F3] gives the finite-rank formulation in the article's geometric conventions. [F1, F3, step 1.1, step 1.2, given] ∎
