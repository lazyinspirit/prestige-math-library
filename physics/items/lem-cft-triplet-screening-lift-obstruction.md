---
id: lem-cft-triplet-screening-lift-obstruction
kind: lemma
title: Screening coefficient and nonsection obstruction for the actual triplet
  projection
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
deps:
  - def-cft-triplet-lattice-screening-data
  - lem-cft-triplet-square-zero-lattice-jacobi
  - lem-cft-triplet-deformed-grading-and-jordan-top
  - def-admissible-vertex-algebra-module
dependency_roles:
  def-cft-triplet-lattice-screening-data: mathematical-premise
  lem-cft-triplet-square-zero-lattice-jacobi: mathematical-premise
  lem-cft-triplet-deformed-grading-and-jordan-top: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Dražen Adamović and Antun Milas, Lattice construction of logarithmic
        modules for certain vertex algebras
      url: https://arxiv.org/pdf/0902.3417v2
      locator: Lemma 5.1, Theorem 5.1(ii) coefficient calculation, and Lemma 5.2,
        printed pp.9–12. The coefficient and nonsection argument below concern
        the actual constructed modules; kernel equality and endpoint
        irreducibility are not asserted.
dependency_level: 3
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the explicit square-zero triplet construction with integer $p\ge2$, put $h=(2-p)/4$, $t=e^{-\alpha/2}$, $w=e^{\alpha/2-\alpha/p}$, $B=e^{(1-1/p)\alpha}$, $b=e^{3\alpha/2-\alpha/p}$, $\nu=p/(p-1)$, and $G=Q+\nu B_{(-1)}$. Modes without a tilde denote the undeformed lattice action. Then
$$G^2t=C_p b,\qquad \widetilde E_{(3p-3)}t=C_p w,\qquad C_p=2\frac p{p-1}(-1)^{p-1}\binom{2p-2}{p-1}\ne0.$$
Consequently $N_2=W(p)w$ in the second summand is contained in $M_1=W(p)t$ for the deformed action. Projection $\pi$ onto the first summand restricts to a surjective admissible-module map $M_1\to\Pi(1)$, where $\Pi(1)=W(p)t$ uses the undeformed action. If $K=\ker(\pi|_{M_1})$, the actual short exact sequence
$$0\longrightarrow K\longrightarrow M_1\mathrel{\mathop{\longrightarrow}^{\pi}}\Pi(1)\longrightarrow0$$
has no section in the admissible category with grading $d=\operatorname{wt}-h$. Here $N_2\subset K$; equality $K=N_2$ and irreducibility of the named cyclic endpoint modules are further assertions requiring proof.

## Statement references

[[def-cft-triplet-lattice-screening-data]]

[[lem-cft-triplet-square-zero-lattice-jacobi]]

[[lem-cft-triplet-deformed-grading-and-jordan-top]]

[[def-admissible-vertex-algebra-module]]

[Adamović–Milas, Lemmas 5.1–5.2](https://arxiv.org/pdf/0902.3417v2)

## Facts & Assumptions

**Given:** The explicit oscillator and sector formulas, $p\ge2$, and all notation in the Statement. For a state $a\in W(p)$ write $\widetilde a_{(k)}$ for its deformed module modes. All calculations below take place on the actual two-sector lattice module.

[F1] [[def-cft-triplet-lattice-screening-data]] defines the lattice fields, $Q,v,F,H,E$, the deformation, and the cyclic spaces.

[F2] [[lem-cft-triplet-square-zero-lattice-jacobi]] proves the adjoint and module Jacobi identities for these explicit fields. Their residues give $[a_{(j)},Y(c,z)]=\sum_{i\ge0}\binom ji z^{j-i}Y(a_{(i)}c,z)$ for every integer $j$, with truncation on the state $c$.

[F3] [[lem-cft-triplet-deformed-grading-and-jordan-top]] proves the actual deformed action, the inclusion $M_1\subset P_+^{p-1}$, and semisimplicity of $\widetilde L(0)=L(0)$ on $M_1$. The two sector vacuum degrees are $pn^2+n$ and $pn^2-n$. Its conformal-field calculation gives weight $ps^2-(p-1)s$ for $e^{s\alpha}$ and shows that each such exponential is primary.

[F4] Morphisms in [[def-admissible-vertex-algebra-module]] commute with the fields and preserve the specified grading.

## Proof

1.1 Since $e^\alpha$ is primary of weight one by [F3], its zero mode $Q$ commutes with every $L(n)$: taking the $z^{-1}$ coefficient of $[L(n),Y(e^\alpha,z)]=z^{n+1}\partial_zY(e^\alpha,z)+(n+1)z^nY(e^\alpha,z)$ gives zero. It annihilates the vacuum. Thus $Q\omega=0$. Also $QF=H$, $QH=E$, and $QE=Q^3F=0$: the latter has charge $2\alpha$ and weight $2p-1$, whereas that charge has minimum weight $2p+2$. By the zero-mode derivation identity from [F2], $Q$ therefore maps the four-generator algebra $W(p)$ into itself. Directly, $Qv=x_1B=\nu TB$ and $QB=0$, because the leading power in $Y(e^\alpha,z)B$ is $z^{2p-2}$. The translation identity gives $(TB)_{(n)}=-nB_{(n-1)}$, so $[Q,v_{(n)}]=-\nu nB_{(n-1)}$ and $[Q,B_{(-1)}]=0$ on both the algebra and its module. [given, F1, F2, F3, algebra]

2.1 For $a\in W(p)$ put $c_n=(-1)^{n+1}/n$. The difference between $[Q,\widetilde Y(a,z)]$ and $\widetilde Y(Qa,z)$ is $\sum_{n\ge1}c_nz^{-n}Y([Q,v_{(n)}]a,z)=\nu\sum_{n\ge1}(-1)^nz^{-n}Y(B_{(n-1)}a,z)$. On the other hand [F2] with $j=-1$ gives $[B_{(-1)},Y(a,z)]=\sum_{i\ge0}(-1)^iz^{-i-1}Y(B_{(i)}a,z)$. The two displayed sums cancel after $i=n-1$. Every deformation correction has a state in the sector-one ideal; its field and $B_{(-1)}$ have zero composite in either order on this explicit module, since both raise the sector index by one. Therefore $$[G,\widetilde Y(a,z)]=\widetilde Y(Qa,z).$$ All sums here are finite on the fixed state $a$, so no completion of the module is used. In particular $[G,F_{(k)}]=\widetilde H_{(k)}$ and $[G,\widetilde H_{(k)}]=\widetilde E_{(k)}$, since the deformation of $F$ is zero. [F1, F2, step 1.1, algebra]

2.2 The state $B$ has weight zero, hence $B_{(-1)}$ and $Q$ preserve the undeformed weight. The vector $Q^2t$ would have degree $p-1$ and charge $3\alpha/2$, whose vacuum degree is $p+1$; it is zero. Moreover $B_{(-1)}^2=0$ by the sector rule. Using step 1.1 gives $G^2t=2\nu QB_{(-1)}t$. The latter vector has charge $(3/2-1/p)\alpha$ and degree $p-1$, exactly the vacuum degree of that charge, so it is a scalar multiple of $b$. To compute its scalar, take $\operatorname{Res}_x\operatorname{Res}_y y^{-1}Y(e^\alpha,x)Y(B,y)t$ and project the output to oscillator degree zero. The explicit exponential contraction in [F1] leaves the Laurent polynomial $$x^{-p}y^{-(p-1)}(x-y)^{2p-2}.$$ The coefficient selected is $[x^{-1}y^0]$ before multiplication by $y^{-1}$. Expanding the last factor as $\sum_{j=0}^{2p-2}(-1)^j\binom{2p-2}j x^{2p-2-j}y^j$, only $j=p-1$ contributes. Thus $QB_{(-1)}t=(-1)^{p-1}\binom{2p-2}{p-1}b$, proving $G^2t=C_pb$. [F1, F3, step 1.1, algebra]

3.1 Put $m=3p-3$. The mode $F_{(m)}$ lowers degree by $p-1$. The vector $t$ has degree $p-1$ and charge $-\alpha/2$, and $Gt$ has that same degree with possible charges $\alpha/2$ and $(1/2-1/p)\alpha$. After applying $F_{(m)}$ their possible charges are $-3\alpha/2$, $-\alpha/2$ and $(-1/2-1/p)\alpha$. None is a degree-zero charge: [F3] shows that those are only $\alpha/2$ and $(1/2-1/p)\alpha$. Hence $F_{(m)}t=F_{(m)}Gt=0$. Applying the double commutator from step 2.1 gives $\widetilde E_{(m)}t=F_{(m)}G^2t$. The leading term of $Y(F,z)b$ is $z^{-3p+2}w$, with coefficient one in the specified trivial cocycle. Step 2.2 now yields $\widetilde E_{(m)}t=C_pw$. Since $C_p\ne0$, $w\in M_1$ and thus $N_2\subset M_1$. On the second sector all corrections vanish, so this copy of $N_2$ has precisely its undeformed action. [F1, F3, step 2.1, step 2.2, algebra]

4.1 Every correction maps the first summand into the second and annihilates the second. Thus projection to the first intertwines the deformed action with the undeformed action. Its image on the cyclic module $M_1$ is exactly the undeformed cyclic space $\Pi(1)$; $K=M_1\cap V_{L+\alpha/2-\alpha/p}$, and step 3.1 gives $N_2\subset K$. The explicit degree decomposition restricts to each cyclic space and to $K$: as in [F3], projection onto a finite set of eigencomponents of any vector is a polynomial in the weight operator. Consequently the image, kernel and inclusion are admissible with the inherited grading, and the displayed sequence with kernel $K$ is short exact. [F1, F3, F4, step 3.1, algebra]

5.1 In the undeformed first sector the same double commutator with $Q$ gives $E_{(m)}t=Q^2F_{(m)}t-2QF_{(m)}Qt+F_{(m)}Q^2t=0$. Indeed the first and last terms vanish by steps 2.2 and 3.1, while $F_{(m)}Qt$ would have degree zero and charge $-\alpha/2$, so it too vanishes. Suppose there were an admissible section $s$ of $\pi$. Since it preserves degree and $\pi s(t)=t$, write $s(t)=t+k$ with $k$ in the second sector of degree $p-1$. The second-sector vacuum degrees $pn^2-n$ show that its only possible charges are $(1/2-1/p)\alpha$ and $(3/2-1/p)\alpha$: all $n\le-1$ give degree at least $p+1$ and all $n\ge2$ give degree at least $4p-2$. The undeformed $E_{(m)}$ has charge $\alpha$ and lowers degree by $p-1$. On these two possible charges its degree-zero output would have charge $(3/2-1/p)\alpha$ or $(5/2-1/p)\alpha$, both absent in degree zero. Corrections annihilate this sector; hence $\widetilde E_{(m)}k=0$. Intertwining would now give $0=s(E_{(m)}t)=\widetilde E_{(m)}s(t)=C_pw\ne0$, a contradiction. This proves absence of a section for the actual projection, independently of the unresolved equality $K=N_2$. [F1, F3, F4, step 2.1, step 2.2, step 3.1, step 4.1, contradiction] ∎
