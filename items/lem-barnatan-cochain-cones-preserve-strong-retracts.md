---
id: lem-barnatan-cochain-cones-preserve-strong-retracts
kind: lemma
title: "Explicit cochain cone retractions in the formal cobordism category"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-barnatan-open-tangle-cobordism-complexes]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, Lemma 4.5 and Figure 8"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Published printed pp.1460–1462; both source and target retracts, with explicit cochain signs"
---

## Statement

Let $f:U\to V$ be an internal degree zero chain map between bounded cochain complexes in the additive open Bar-Natan category. Define $T(f)^n=U^n\oplus V^{n-1}$ and $D_f=\begin{pmatrix}d_U&0\\f&-d_V\end{pmatrix}$. Suppose chain maps $i:Q\to U$, $p:U\to Q$ and $h:U^n\to U^{n-1}$ have internal degree zero and satisfy $pi=1_Q$, $1_U-ip=d_Uh+hd_U$, $hi=ph=h^2=0$. Then $T(f)$ strongly retracts onto $T(fi)$ by the explicit block maps given below. Likewise, if $i:Q\to V$, $p:V\to Q$ and $h:V^n\to V^{n-1}$ satisfy the corresponding equations on $V$, then $T(f)$ strongly retracts onto $T(pf)$. All block maps and homotopies have internal degree zero; no abelian-category or exactness assumption is needed.

## Statement references

[[def-barnatan-open-tangle-cobordism-complexes]]

[Bar-Natan, Lemma 4.5 and Figure 8](https://arxiv.org/pdf/math/0410495v2)

## Facts & Assumptions

**Given:** The maps in the statement. All products denote composition with the rightmost map applied first; the degree indices on block entries are the unique ones determined by their source and target.

[F1] [[def-barnatan-open-tangle-cobordism-complexes]] supplies bounded cochain complexes, finite direct sums, matrices and the homotopy equation $1-ip=dh+hd$ in the open additive category.

## Proof

1.1 On $U^n\oplus V^{n-1}$ the square of $D_f$ has diagonal entries $d_U^2,d_V^2$ and bottom-left entry $fd_U-d_Vf$, so $D_f^2=0$. The same computation applies to $fi$ and $pf$ because $i,p$ are chain maps. The indicated direct sums are finite and bounded, and every entry has the specified internal degree, so all three $T$ constructions are complexes in [F1]. [F1, given, algebra]

2.1 For a retract of the source set $I=\begin{pmatrix}i&0\\0&1_V\end{pmatrix}:T(fi)\to T(f)$, $P=\begin{pmatrix}p&0\\-fh&1_V\end{pmatrix}:T(f)\to T(fi)$ and $H=\begin{pmatrix}h&0\\0&0\end{pmatrix}$ on $T(f)$. Here $fh:U^n\to V^{n-1}$ is correctly typed, and $H$ has cochain degree $-1$. The diagonal chain-map equations follow from those for $i,p$. For the lower-left entry of $D_{fi}P=PD_f$ the required equality is $fip+d_Vfh=f-fhd_U$, which follows by multiplying $1-ip=d_Uh+hd_U$ by $f$ and using $fd_U=d_Vf$. The lower-left equation for $I$ is simply $fi=fi$. Thus both block maps are chain maps. [F1, given, step 1.1, construct, algebra]

2.2 For a retract of the target set $I=\begin{pmatrix}1_U&0\\hf&i\end{pmatrix}:T(pf)\to T(f)$, $P=\begin{pmatrix}1_U&0\\0&p\end{pmatrix}:T(f)\to T(pf)$ and $H=\begin{pmatrix}0&0\\0&-h\end{pmatrix}$ on $T(f)$. Now $hf:U^n\to V^{n-1}$ is correctly typed. For $I$, the lower-left chain-map equation is $f-d_Vhf=hfd_U+ipf$, which follows from $1-ip=d_Vh+hd_V$ and $d_Vf=fd_U$. For $P$, that equation is exactly $pf=pf$, and the remaining blocks use the chain-map equations for $i,p$. Thus both block maps are chain maps. [F1, given, step 1.1, construct, algebra]

3.1 The product $PI$ is $\begin{pmatrix}pi&0\\-fhi&1\end{pmatrix}=1$ by $pi=1$ and $hi=0$. Also $1-IP=\begin{pmatrix}1-ip&0\\fh&0\end{pmatrix}=D_fH+HD_f$ by the given retract equation. Finally $HI=0$, $PH=0$ and $H^2=0$ follow respectively from $hi=0$, from $ph=0$ together with $h^2=0$, and from $h^2=0$. These are the full strong-retract equations for the source case. [given, step 2.1, algebra]

4.1 The product $PI=\begin{pmatrix}1&0\\phf&pi\end{pmatrix}=1$. Moreover $1-IP=\begin{pmatrix}0&0\\-hf&1-ip\end{pmatrix}=D_fH+HD_f$. The equations $HI=PH=H^2=0$ follow from $h^2=hi=ph=0$, with precisely the displayed minus sign on $H$'s target block. All equations are finite matrix addition and composition, valid in the additive category of [F1], and every entry has internal degree zero. This proves both assertions without any exactness premise. [F1, given, step 2.2, algebra] ∎
