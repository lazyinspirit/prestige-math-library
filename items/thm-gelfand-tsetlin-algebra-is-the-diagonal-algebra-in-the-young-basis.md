---
id: thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis
kind: theorem
title: "The Gelfand-Tsetlin algebra is the diagonal algebra of the Young basis"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-gelfand-tsetlin-algebra-for-the-symmetric-group-chain, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, cor-complex-specht-restriction-branching-rule, thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field, cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order, thm-simple-modules-over-semisimple-rings, thm-class-sums-form-a-basis-of-the-center-of-k-g, def-jucys-murphy-elements-of-the-symmetric-group-algebra, lem-conjugating-a-cycle-relabels-its-entries]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, Proposition 1.1, Theorem 2.8 and section 3, printed pp. 7-16"
      url: "https://arxiv.org/pdf/math/0503040"
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), section 2, printed pp. 12-18"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis; evidence research/frontier-38-owner-30-reader-19.md, research/frontier-38-owner-30-reader-findings-19.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

For $m\ge1$ and $\lambda\vdash m$ let $e^{(m)}_\lambda\in Z(\mathbb C[S_m])$ be
the central idempotent of the Wedderburn factor
$\operatorname{End}(S^\lambda_{\mathbb C})$ of $\mathbb C[S_m]$, so that
$1=\sum_{\lambda\vdash m}e^{(m)}_\lambda$ with pairwise orthogonal central
idempotents and $e^{(m)}_\lambda$ acts as the identity on
$S^\lambda_{\mathbb C}$ and as $0$ on $S^\mu_{\mathbb C}$ for $\mu\ne\lambda$.
For a path $T=(\lambda^{(1)},\dots,\lambda^{(n)})$ in the Young graph (a
standard tableau of size $n$) put
$$P_T:=e^{(1)}_{\lambda^{(1)}}e^{(2)}_{\lambda^{(2)}}\cdots e^{(n)}_{\lambda^{(n)}},$$
the factors commuting pairwise. Then:

(i) every $P_T$ is a nonzero idempotent of rank one; (ii) $P_TP_{T'}=0$ for
$T\ne T'$ and $\sum_TP_T=1$; (iii) $\mathrm{GZ}(n)=\bigoplus_T\mathbb C\,P_T$,
the algebra diagonal in the basis of the lines
$\mathbb C v_T:=\operatorname{im}P_T$ (the Young basis); (iv) the elements
$X_1,\dots,X_n$ act diagonally in the Young basis, and $\mathrm{GZ}(n)$ is a
maximal commutative subalgebra of $\mathbb C[S_n]$.

## Facts & Assumptions

**Given:** The chain $S_1\subset\cdots\subset S_n$ and the Gelfand-Tsetlin
algebra $\mathrm{GZ}(n)=\langle Z(\mathbb C[S_1]),\dots,Z(\mathbb C[S_n])\rangle$
([[def-gelfand-tsetlin-algebra-for-the-symmetric-group-chain]]); for each
$m\ge1$ the complex Specht modules $V^\lambda:=S^\lambda_{\mathbb C}$,
$\lambda\vdash m$, which are the irreducible $\mathbb C[S_m]$-modules up to
isomorphism, pairwise inequivalent for distinct $\lambda$
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

[F1] For every $m\ge1$ the group algebra is a product of matrix algebras
indexed by its simple modules; by the classification this reads
$\mathbb C[S_m]\cong\prod_{\lambda\vdash m}\operatorname{End}(V^\lambda)$, and
the identity of the factor $\operatorname{End}(V^\lambda)$ is a central
idempotent $e^{(m)}_\lambda$ in $\mathbb C[S_m]$ such that
$1=\sum_{\lambda\vdash m}e^{(m)}_\lambda$, $e^{(m)}_\lambda e^{(m)}_\mu
=\delta_{\lambda\mu}e^{(m)}_\lambda$ for all $\lambda,\mu\vdash m$, and for
every $\mathbb C[S_m]$-module $W$ the element $e^{(m)}_\lambda$ acts as the
projection onto the sum of the irreducible summands of $W$ isomorphic to
$V^\lambda$; in particular $e^{(m)}_\lambda$ acts as the identity on
$V^\lambda$ and as $0$ on $V^\mu$ for $\mu\ne\lambda$
([[thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field]],
[[thm-simple-modules-over-semisimple-rings]],
[[cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order]]).

[F2] For $m\ge2$ and $\lambda\vdash m$ the restriction of $V^\lambda$ to
$S_{m-1}$ is $\operatorname{Res}^{S_m}_{S_{m-1}}V^\lambda\cong
\bigoplus_{x\in\operatorname{Rem}(\lambda)}V^{\lambda-x}$, the summands being
irreducible with pairwise distinct shapes and each occurring exactly once; for
$m=1$ one has $V^{(1)}=\mathbb C$ with $S_0$ acting trivially
([[cor-complex-specht-restriction-branching-rule]]).

## Proof

**Proof technique:** direct.

1.1 The idempotents $e^{(m)}_\lambda$ of [F1] are central in $\mathbb C[S_m]$, pairwise orthogonal, sum to $1$, and project each $\mathbb C[S_m]$-module onto its $\lambda$-isotypic part. [F1, given]

1.2 The idempotents attached to different levels commute: if $m\le k$, then $\mathbb C[S_m]\subseteq\mathbb C[S_k]$ and $e^{(k)}_\mu$ is central in $\mathbb C[S_k]$, hence commutes with every element of $\mathbb C[S_m]$, in particular with $e^{(m)}_\lambda$. [F1, given, algebra]

2.1 Let $m\ge2$ and $\lambda\vdash m$. The restriction of $V^\lambda$ to $S_{m-1}$ is the direct sum of the distinct irreducible modules $V^{\lambda-x}$ over the removable nodes $x\in\operatorname{Rem}(\lambda)$; consequently $e^{(m-1)}_\mu$ acts on $V^\lambda$ as the projection onto the summand $V^\mu$ when $\mu=\lambda-x$ for some $x\in\operatorname{Rem}(\lambda)$, and as $0$ otherwise. [step 1.1, F2, algebra]

2.2 For every standard tableau $T$ of size $n$ the product $P_T=e^{(1)}_{\lambda^{(1)}}\cdots e^{(n)}_{\lambda^{(n)}}$ is an idempotent, and $P_TP_{T'}=0$ whenever $T\ne T'$: distinct standard tableaux of size $n$ differ at some level $m\le n$, where their entries are distinct partitions, and the corresponding factors are orthogonal by [F1] after all factors are commuted past one another using step 1.2. [step 1.1, step 1.2, F1, algebra]

2.3 Every central element of $\mathbb C[S_m]$ is a linear combination of the $e^{(m)}_\lambda$: under the isomorphism $\mathbb C[S_m]\cong\prod_\lambda\operatorname{End}(V^\lambda)$ of [F1] the centre corresponds to the product of the centres of the factors, and the centre of the matrix algebra $\operatorname{End}(V^\lambda)$ consists of the scalars, that is, of $\mathbb C e^{(m)}_\lambda$. Hence $z=\sum_{\lambda\vdash m}\omega_\lambda(z)e^{(m)}_\lambda$ for every $z\in Z(\mathbb C[S_m])$, where $\omega_\lambda(z)$ is the scalar by which $z$ acts on $V^\lambda$. [step 1.1, F1, algebra]

3.1 Rank one and the sum over paths, by induction on $m$: for every $\mu\vdash m$ and every path $T$ of length $m$ ending at $\mu$, the product $E_T:=e^{(1)}_{\lambda^{(1)}}\cdots e^{(m)}_\mu$ acts on $V^\mu$ as a rank-one idempotent with image a line $L_T\ne0$, kills every $V^\nu$ with $\nu\vdash m$, $\nu\ne\mu$, and $\sum_{T\text{ ending at }\mu}E_T$ acts as the identity on $V^\mu$, that is, $\sum_{T\text{ ending at }\mu}E_T=e^{(m)}_\mu$ in $\mathbb C[S_m]$. For $m=1$ the unique path gives $E=e^{(1)}_{(1)}=1$ acting as the identity on $V^{(1)}=\mathbb C$ by [F2], which is the rank-one projection onto the whole line. For the induction step write $T'=T\downarrow[m-1]$ and $\mu=\lambda^{(m-1)}+x$; by [F2] and step 2.1 the operator $e^{(m-1)}_{\lambda^{(m-1)}}$ projects $V^\mu$ onto the summand $V^{\lambda^{(m-1)}}$, on which $E_{T'}$ acts as the rank-one projection onto $L_{T'}$ by the induction hypothesis, while the remaining summands of the restriction are killed; multiplying by $e^{(m)}_\mu$, which is the identity on $V^\mu$ and kills the other $V^\nu$, gives the claim for $E_T$. Summing over all paths ending at $\mu$ and using the induction hypothesis at level $m-1$ together with [F1] gives $\sum_{T\text{ ending at }\mu}E_T=\sum_{\nu\vdash m-1}\sum_{T'\text{ ending at }\nu}E_{T'}e^{(m)}_\mu=\bigl(\sum_{\nu\vdash m-1}e^{(m-1)}_\nu\bigr)e^{(m)}_\mu=e^{(m)}_\mu$. Distinct paths give distinct lines: if two paths end at $\mu$ through different removable nodes their lines lie in different summands of the restriction, and if they end through the same node the induction hypothesis separates their prefixes. [step 1.1, step 2.1, F1, F2, algebra]

4.1 The algebra $\mathrm{GZ}(n)$ equals $\bigoplus_T\mathbb C P_T$. For the inclusion $\supseteq$: each factor $e^{(m)}_{\lambda^{(m)}}$ of $P_T$ lies in $Z(\mathbb C[S_m])$, so $P_T\in\mathrm{GZ}(n)$. For the inclusion $\subseteq$: step 2.3 writes every element of every generating centre as $\sum_{\lambda}\omega_\lambda e^{(m)}_\lambda$, and step 3.1 writes $e^{(m)}_\lambda=\sum_{T\text{ ending at }\lambda}E_T$; substituting gives a linear combination of the $P_T=e^{(1)}_{\lambda^{(1)}}\cdots e^{(n)}_{\lambda^{(n)}}$ for paths of length $n$, so every generating element lies in the span, and the span is a subalgebra because $P_TP_{T'}=\delta_{TT'}P_T$ by step 2.2; hence $\mathrm{GZ}(n)\subseteq\bigoplus_T\mathbb C P_T$. The $P_T$ are linearly independent because they are nonzero and pairwise orthogonal, so the sum is direct and $\mathrm{GZ}(n)$ is commutative. [step 2.2, step 2.3, step 3.1, algebra]

4.2 The idempotents add up to $1$: summing the identity of step 3.1 over all $\lambda\vdash n$ and using [F1] gives $\sum_TP_T=\sum_{\lambda\vdash n}e^{(n)}_\lambda=1$. [step 3.1, F1, algebra]

5.1 The Jucys-Murphy elements lie in $\mathrm{GZ}(n)$ and act diagonally. For $k\ge2$ one has $X_k=T_k-T_{k-1}$, where $T_m=\sum_{1\le i<j\le m}(i\ j)$ is the sum of the transpositions of $S_m$ ([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]); any two transpositions are conjugate, since for transpositions $(a\ b)$ and $(c\ d)$ a permutation $g$ with $g(a)=c$, $g(b)=d$ satisfies $g(a\ b)g^{-1}=(c\ d)$ by [[lem-conjugating-a-cycle-relabels-its-entries]], so $T_m$ is a class sum and hence central in $\mathbb C[S_m]$ by [[thm-class-sums-form-a-basis-of-the-center-of-k-g]] for $m\ge2$, while $T_1=0$. Thus each $T_m$ lies in $Z(\mathbb C[S_m])\subseteq\mathrm{GZ}(n)$ and each $X_k$ lies in $\mathrm{GZ}(n)$; also $X_1=0$. By step 4.1 we may write $X_k=\sum_Tc_{T,k}P_T$, and then $X_k$ acts on the line $\mathbb C v_T=\operatorname{im}P_T$ by the scalar $c_{T,k}$, because $P_T$ is the identity on its own image. Hence $X_1,\dots,X_n$ act diagonally in the Young basis. [step 4.1, given, algebra]

6.1 Maximal commutativity. Under the isomorphism $\mathbb C[S_n]\cong\prod_{\lambda\vdash n}\operatorname{End}(V^\lambda)$ of [F1], step 3.1 shows that $P_T$ corresponds to the tuple whose entry in the factor $\operatorname{End}(V^\lambda)$, $\lambda=\lambda^{(n)}$, is the rank-one projection $p_T$ onto the line $L_T\subseteq V^\lambda$, and whose other entries are $0$; since the lines $L_T$ for $T$ of shape $\lambda$ are independent and number $\dim_\mathbb C V^\lambda$, they form a basis of $V^\lambda$. Therefore $\mathrm{GZ}(n)=\bigoplus_T\mathbb C P_T$ corresponds to the tuples $(a_\lambda)$ with $a_\lambda$ in the algebra $D_\lambda$ of all operators on $V^\lambda$ diagonal in that basis. An element $b=(b_\lambda)$ commutes with every $P_T$ if and only if each $b_\lambda$ commutes with the full diagonal algebra $D_\lambda$; and the commutant of $D_\lambda$ in $\operatorname{End}(V^\lambda)$ is $D_\lambda$ itself, because a matrix commuting with every diagonal matrix is diagonal. Hence the commutant of $\mathrm{GZ}(n)$ in $\mathbb C[S_n]$ is $\mathrm{GZ}(n)$, and if $B\subseteq\mathbb C[S_n]$ is any commutative subalgebra containing $\mathrm{GZ}(n)$, then $B$ commutes with $\mathrm{GZ}(n)$, so $B\subseteq\mathrm{GZ}(n)$ and $B=\mathrm{GZ}(n)$. Thus $\mathrm{GZ}(n)$ is a maximal commutative subalgebra, and with steps 4.1-5.1 all four assertions are proved. [step 4.1, step 5.1, F1, algebra] ∎

## Remarks

- **The Young basis.** The lines $\mathbb C v_T=\operatorname{im}P_T$ are the
  simultaneous eigenspaces of the Gelfand-Tsetlin algebra; choosing a nonzero
  vector $v_T$ in each gives the Young basis. The eigenvalues of the
  Jucys-Murphy elements in this basis are computed in
  [[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]],
  and the idempotents $P_T$ are reproduced by interpolation in
  [[thm-primitive-tableau-idempotents-by-jucys-murphy-interpolation]].

- **Where the hypotheses are used.** The argument uses characteristic zero
  only through the semisimplicity and the classification of the complex
  irreducibles; the branching rule and the centre are used to build and count
  the $P_T$. Nothing here uses the Axiom of Choice: all sums and products are
  finite and the idempotents are constructed from the fixed chain.
