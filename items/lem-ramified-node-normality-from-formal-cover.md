---
id: lem-ramified-node-normality-from-formal-cover
kind: lemma
title: "Normality of a ramified node from its formal graded cover"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $k$ be an algebraically closed field and $e\ge1$. Put
$$B=(k\llbracket s\rrbracket[u,v]/(uv-s^e))_{(s,u,v)},\qquad
A=(k\llbracket s\rrbracket[a,b]/(ab-s))_{(s,a,b)}.$$
Assume explicitly that the natural map $A\to k\llbracket a,b\rrbracket$ is faithfully flat and that $k\llbracket a,b\rrbracket$ is integrally closed. Then $B$ is an integrally closed domain. The same conclusion holds for $uv=s^e h(s)$ with any unit $h(s)\in k\llbracket s\rrbracket^\times$. No invertibility of $e$ is assumed. The two completion and integral-closure premises are not proved by this lemma.

## Facts & Assumptions

**Given:** The field, integer, rings and two explicit formal-cover premises in the Statement.

## Proof

1.1 The completion of $A$ is $k\llbracket a,b\rrbracket$ under $s=ab$. The assumed faithful flatness makes $A\to\widehat A$ injective and contracts each principal ideal: if $x/y\in\operatorname{Frac}(A)$ lies in $\widehat A$, then $x\in y\widehat A\cap A=yA$. Hence $A=\widehat A\cap\operatorname{Frac}(A)$. If $z\in\operatorname{Frac}(A)$ is integral over $A$, the same monic equation makes it integral over $\widehat A$; the assumed integral closure of $\widehat A$ gives $z\in\widehat A$, and the intersection equality gives $z\in A$. Thus $A$ is an integrally closed domain. [given, algebra]

2.1 Map $u\mapsto a^e$, $v\mapsto b^e$ and $s\mapsto ab$. Before localization, every weight-zero monomial for the $\mathbb Z/e$ grading with weights $1,-1$ is a product of $a^e,b^e,ab$; normal forms modulo $uv=s^e$ have distinct monomial images. Thus the degree-zero subring is the indicated node ring. The cover is finite: $a,b$ satisfy monic equations $a^e=u$, $b^e=v$. After localizing the base at its indicated maximal ideal, the finite cover has closed fibre $k[a,b]/(a^e,b^e,ab)$, which has the unique maximal ideal $(a,b)$. Hence that finite algebra is already local and equals $A$; localizing only in the degree-zero base preserves the grading and its degree-zero part $B$. This grading argument remains valid when the characteristic divides $e$. [step 1.1, algebra]

3.1 Let $z\in\operatorname{Frac}(B)$ be integral over $B$. It is integral over $A$, so step 1.1 puts it in $A$. Choose a nonzero $d\in B$ with $dz\in B$. Decompose $z=\sum_r z_r$ into its finitely many homogeneous components. Since $d$ and $dz$ have weight zero and $A$ is a domain, $dz_r=0$ for every $r\ne0$, hence $z_r=0$. Thus $z$ lies in the degree-zero subring $B$, proving normality. If $uv=s^e h(s)$, replace $v$ by $v/h(s)$; this is an isomorphism because $h(s)$ is a unit. [step 1.1, step 2.1, choose, algebra] ∎
