---
id: lem-author-b319c70a2611-antipodal-avoidance
kind: lemma
title: Antipodal generic points in a central relative ball
status: published
domain: mathematics
origin: pipeline
deps:
  - def-relative-cone-artin-tits-normalisers
  - lem-author-b319c70a2611-central-relative-ball
  - math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
dependency_roles:
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  lem-author-b319c70a2611-central-relative-ball: mathematical-premise
  math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 11
---

## Statement

Let $E=\Theta_J$ and let $B_E(u,r)$ be a relative ball supplied by the central-relative-ball lemma. One can choose $v,v^\prime\in B_E(u,r)$ lying on no hyperplane of $\mathcal H^J$ with $v^\prime=2u-v$. If $\dim E>0$, they can be chosen distinct, and $u$ lies in the relative interior of their segment $[v,v^\prime]=\{(1-s)v+sv^\prime:0\le s\le1\}$. Here the relative interior of this nondegenerate segment means $\{(1-s)v+sv^\prime:0<s<1\}$. If $E=0$, take $v=v^\prime=u$; the relative arrangement is empty.

## Statement references

[[def-relative-cone-artin-tits-normalisers]]

[[lem-author-b319c70a2611-central-relative-ball]]

## Facts & Assumptions

[F1] The space $E=\Theta_J$ is a finite-dimensional real vector space with the induced coordinate Euclidean norm. Each member of $\mathcal H^J$ is a proper linear hyperplane $K=\ker a$ for a nonzero linear functional $a:E\to\mathbb R$, by [[def-relative-cone-artin-tits-normalisers]].

[F2] The fixed ball $B_E(u,r)$ has $r>0$, lies in $\mathrm{Cone}(J)$, and meets only finitely many relative hyperplanes; each such hyperplane contains $u$, by [[lem-author-b319c70a2611-central-relative-ball]].

[F3] A finite family of proper linear subspaces cannot cover a finite-dimensional vector space over an infinite field, by [[math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]].

## Proof

**Given:** The relative space and arrangement in [F1], the central finite relative ball in [F2], and finite-union avoidance in [F3]. **Goal:** Construct the antipodal pair, with the stated relative segment interior in positive dimension and the stated zero-dimensional case.

**Proof technique:** direct.

1.1 If $E=0$, then $u=0$, and there are no proper linear hyperplanes in $E$, so $\mathcal H^J$ is empty and $v=v^\prime=u$ has the required properties. Suppose $\dim E>0$. By [F2], the relative hyperplanes meeting the ball form a finite set $\mathcal K$ and all contain $u$; by [F1], they are proper linear subspaces of $E$. Since $\mathbb R$ is infinite, [F3] supplies $h\in E\setminus\bigcup_{K\in\mathcal K}K$. If $\mathcal K$ is nonempty, this $h$ is nonzero because every $K$ contains $0$; if $\mathcal K$ is empty, choose any nonzero $h\in E$. [F1, F2, F3, choose]

2.1 Choose $t>0$ with $t\|h\|<r$ and put $v=u+th$, $v^\prime=u-th$, so both points lie in $B_E(u,r)$. For $K=\ker a\in\mathcal K$, [F1] gives a nonzero linear functional $a$, [F2] gives $a(u)=0$, and step 1.1 gives $a(h)\ne0$. Thus $a(v)=ta(h)$ and $a(v^\prime)=-ta(h)$ are nonzero. No other relative hyperplane meets the ball, by the definition of $\mathcal K$, so neither point lies on any relative hyperplane. Also $v+v^\prime=2u$ and $v-v^\prime=2th\ne0$. The segment parametrization in the Statement therefore gives $u=(1-1/2)v+(1/2)v^\prime$ with $0<1/2<1$, placing $u$ in its stated relative interior. [step 1.1, F1, F2, algebra] ∎
