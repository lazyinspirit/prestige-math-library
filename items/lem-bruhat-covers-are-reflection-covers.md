---
id: lem-bruhat-covers-are-reflection-covers
kind: lemma
title: Bruhat covers are right multiplication by positive-root reflections
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-bruhat-order-on-a-finite-weyl-group, lem-finite-weyl-strong-exchange-and-deletion, def-root-reflections-and-the-weyl-group-action, def-finite-weyl-root-system-lattice-and-chamber-conventions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 3.1, p. 9"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "N. Hemelsoet and R. Voorhaar, A computer algorithm for the BGG resolution, arXiv:1911.00871, Sec. 2.1-2.2, pp. 3-5"
      url: "https://arxiv.org/pdf/1911.00871"
---

## Statement

Let $x,y\in W$ with $y\lhd x$ a cover. Then there is a unique positive root $\beta\in\Phi^+$ with $x=y s_\beta$, and $\ell(x)=\ell(y)+1$. Conversely, if $\beta\in\Phi^+$ and $\ell(y s_\beta)=\ell(y)+1$, then $y s_\beta\rhd y$ is a cover. In the notation of the Bruhat graph the label $\beta$ of the arrow $x\to y$ is characterised by $s_\beta=y^{-1}x$, and it is also the unique positive root $\gamma$ with $y=x s_\gamma$ and $\ell(x s_\gamma)=\ell(x)-1$. The proof uses the standard sign criterion $\ell(ws_\gamma)<\ell(w)\iff w\gamma<0$ together with the reflection-chain description of Bruhat order.

## Facts & Assumptions

**Given:** The finite reduced crystallographic root system $\Phi$ with positive system $\Phi^+$, the Weyl group $W$ with simple reflections, and the Bruhat order.

[F1] $u\le v$ in Bruhat order is equivalent to the existence of a saturated reflection chain $u=w_0,w_1,\dots,w_k=v$ with $w_{j+1}=t_jw_j$ for root reflections $t_j$ and $\ell(w_{j+1})=\ell(w_j)+1$; every such chain has exactly $\ell(v)-\ell(u)$ steps, so $u\le v$ with $\ell(v)=\ell(u)+1$ means $v=tu$ for a root reflection $t$ ([[def-bruhat-order-on-a-finite-weyl-group]]).

[F2] For a positive root $\gamma\in\Phi^+$ and its reflection $s_\gamma$: $\ell(s_\gamma w)<\ell(w)$ if and only if $w^{-1}\gamma<0$, and $\ell(ws_\gamma)<\ell(w)$ exactly when $w\gamma<0$; only multiplication by a simple reflection is guaranteed to change length by one. Also $\ell(w^{-1})=\ell(w)$ ([[lem-finite-weyl-strong-exchange-and-deletion]]).

[F3] Root reflections are the maps $s_\beta$ for roots $\beta$; $s_\beta=s_{-\beta}$, and $s_\beta=s_\gamma$ forces $\gamma=\pm\beta$ because the only scalar multiples of a root in $\Phi$ are $\pm$ itself; $W$ permutes the root set ([[def-root-reflections-and-the-weyl-group-action]], [[def-finite-weyl-root-system-lattice-and-chamber-conventions]]).

## Proof

1.1 Let $y\lhd x$. By [F1] with a one-step chain, $x=t y$ for a root reflection $t$; write $t=s_\gamma$ with $\gamma$ a root and replace $\gamma$ by $-\gamma$ if necessary so that $\gamma\in\Phi^+$. Since $x=s_\gamma y$ and $\ell(x)=\ell(y)+1>\ell(y)$, the criterion in [F2] applied to $w=y$ forbids $y^{-1}\gamma<0$; hence $\beta:=y^{-1}\gamma\in\Phi^+$. Conjugation gives $x=y\,(y^{-1}s_\gamma y)=y\,s_{y^{-1}\gamma}=y s_\beta$ with $\beta=y^{-1}\gamma\in\Phi^+$. [F1, F2, F3, algebra]

2.1 Suppose $x=y s_\beta=y s_{\beta'}$ with $\beta,\beta'\in\Phi^+$. Then $s_\beta=s_{\beta'}$, so $\beta'=\pm\beta$ by [F3], and positivity forces $\beta'=\beta$. Thus the positive root in step 1.1 is unique, and multiplying $x=y s_\beta$ on the left by $y^{-1}$ gives $y^{-1}x=s_\beta$, so the label is determined by the group elements. [F3, step 1.1]

2.2 Conversely let $\beta\in\Phi^+$ and suppose $\ell(y s_\beta)=\ell(y)+1$. Put $t:=y s_\beta y^{-1}=s_{y\beta}$ by conjugation, so $y s_\beta=t y$ is a one-step saturated reflection chain; by [F1], $y\le y s_\beta$. If $z$ satisfied $y<z<y s_\beta$, then by [F1] any saturated chain from $y$ to $y s_\beta$ through $z$ would have more than one step, so $\ell(y s_\beta)-\ell(y)\ge2$, contradicting the hypothesis. Hence $y s_\beta$ covers $y$. [F1, F3, step 1.1]

3.1 Finally, if $\gamma\in\Phi^+$ satisfies $y=x s_\gamma$ and $\ell(x s_\gamma)=\ell(x)-1$, then $x=y s_\gamma$ by multiplying on the right by $s_\gamma$, and $\ell(y s_\gamma)=\ell(x)=\ell(y)+1$; step 1.1 applied to the cover $y\lhd x$ (whose existence is the hypothesis $y=x s_\gamma$) gives $\gamma=\beta$. Step 2.1 supplied the uniqueness of $\beta$ from the pair $(x,y)$ alone, so the two characterisations of the label coincide. [step 1.1, step 2.1, step 2.2] ∎
