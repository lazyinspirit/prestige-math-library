---
id: thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups
kind: theorem
title: "Under the ultrafilter lemma, amenability is a quasi-isometry invariant for finitely generated groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quasi-isometry-invariant-and-geometric-property-of-a-finitely-generated-group, thm-folner-criterion-for-amenability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Assume the ultrafilter lemma. Amenability is a quasi-isometry invariant of
finitely generated groups.

## Facts & Assumptions

**Given:** Two finitely generated quasi-isometric groups $G$ and $H$, and the ultrafilter lemma.

[L1] A property of finitely generated groups is a quasi-isometry invariant when it depends only on quasi-isometry type ([[def-quasi-isometry-invariant-and-geometric-property-of-a-finitely-generated-group]]).

[L2] Under the ultrafilter lemma, amenability is equivalent to the Folner condition ([[thm-folner-criterion-for-amenability]]).

## Proof

**Proof technique:** direct.

1.1 Choose word metrics on $G$ and $H$, quasi-inverse quasi-isometries $q:G\to H$ and $r:H\to G$, and constants $\lambda\ge1,c,D_G,D_H\ge0$ such that both maps satisfy the $(\lambda,c)$ upper distance bound, $d_G(rq(x),x)\le D_G$, and $d_H(qr(y),y)\le D_H$. A fiber of $q$ has uniformly bounded cardinality: if $q(x)=q(x')$, the lower quasi-isometry inequality bounds $d_G(x,x')$, and a word-metric ball of fixed radius is finite. Let $M_q$ bound those fibers, and define $M_r$ similarly. [given, choose]

2.1 Assume $G$ is amenable. Let $E\subseteq H$ be finite and let $\varepsilon>0$. Put $L=\max\{|e|:e\in E\}$, taking $L=0$ when $E=\varnothing$, set $R=\lambda(L+D_H)+c+D_G$, and let $T$ be the finite radius-$R$ ball in $G$. Set $\delta=\varepsilon/(2M_qM_r(|T|+1))$. By [L2], choose a finite nonempty $A\subseteq G$ with $|tA\triangle A|<\delta|A|$ for every $t\in T$. [L2, step 1.1, choose]

3.1 Put $B=N_{D_H}(q(A))$. It is finite and nonempty, and $|B|\ge|q(A)|\ge |A|/M_q$. If $y\in N_L(B)\setminus B$, choose $b\in B$ and $a\in A$ with $d_H(y,b)\le L$ and $d_H(b,q(a))\le D_H$. Then $d_G(r(y),a)\le R$. Moreover $r(y)\notin A$, since otherwise $d_H(y,q(r(y)))\le D_H$ would put $y$ in $B$. Hence $r(N_L(B)\setminus B)\subseteq N_R(A)\setminus A$, and the fiber bound for $r$ gives $|N_L(B)\setminus B|\le M_r|N_R(A)\setminus A|$. [step 1.1, step 2.1, algebra]

4.1 Since $N_R(A)\setminus A\subseteq\bigcup_{t\in T}(tA\setminus A)$, step 2.1 gives $|N_R(A)\setminus A|<|T|\delta|A|$. For $e\in E$, one has $eB\setminus B\subseteq N_L(B)\setminus B$ and $|eB\triangle B|=2|eB\setminus B|$. Combining this with step 3.1 and $|B|\ge|A|/M_q$ yields $|eB\triangle B|/|B|<2M_qM_r|T|\delta<\varepsilon$. Thus $B$ is an $(E,\varepsilon)$-Folner set in $H$. [step 2.1, step 3.1, algebra]

5.1 Since $E$ and $\varepsilon$ were arbitrary, step 4.1 gives the Folner condition in $H$, so [L2] makes $H$ amenable. Applying the same argument to the quasi-inverse transfers amenability from $H$ to $G$. Therefore amenability depends only on quasi-isometry type, as asserted in [L1]. [L1, L2, step 4.1] ∎
