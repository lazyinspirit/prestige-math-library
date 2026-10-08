---
id: thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series
kind: theorem
title: Unitarity and irreducibility of the limits of discrete series
status: published
origin: pipeline
deps:
  - def-limits-of-discrete-series-for-sl2-r
  - thm-compact-picture-of-the-sl2-principal-series
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points
  - def-compact-group-isotypic-projection
  - def-axiom-of-choice
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is inherited through the compact-picture unitary representation and compact-group isotypic projections. The ladder and invariant-subspace argument uses no further choice."
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Example 2.6, printed pp. 10–11 (the odd compact-picture split and limit modules)"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.10 and proof sketch, printed pp. 299–300 (the two closed irreducible limit summands)"
    - title: "Pavel Etingof, Representations of Lie Groups, MIT 18.757 Lecture 9"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec09.pdf"
      locator: "§9.1, printed pp. 48–49 (the direct sum of the two limit Harish-Chandra modules)"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The two limits $D_1^-,D_1^+$ of [[def-limits-of-discrete-series-for-sl2-r]] are irreducible strongly continuous unitary representations of $G=\mathrm{SL}_2(\mathbb R)$, with multiplicity-one K-type chains of weights $-(1+2j)$ and $+(1+2j)$, respectively, and Casimir scalar $-\tfrac18$. They are the orthogonal direct summands of the unitary principal series $I_{1,0}$:
$$I_{1,0}=D_1^-\oplus D_1^+.$$

## Facts & Assumptions

**Given:** AC; the compact-picture action; the closed limit summands and K-type chains in [[def-limits-of-discrete-series-for-sl2-r]]; and the exceptional-parameter ladder coefficients.

[F1] At $\varepsilon=1,\nu=0$, the compact-picture action $\Pi$ on $H=L^2_1(K)$ is strongly continuous and unitary, and its smooth compact-picture formula is the Iwasawa cocycle ([[thm-compact-picture-of-the-sl2-principal-series]]). Its precise roles here are the ambient unitary action and canonical ANK cocycle used in step 1.1.

[F2] The spaces $D_1^+$ and $D_1^-$ are the closed spans in $H$ of the mutually orthogonal lines $\mathbb C f_{1+2j}$ and $\mathbb C f_{-1-2j}$, respectively; their algebraic spans are dense and their orthogonal direct sum is $H$ ([[def-limits-of-discrete-series-for-sl2-r]]).

[F3] At $\varepsilon=1,\nu=0$, $L_{E_+}f_{-1-2j}=-j f_{-1-2(j-1)}$ and $L_{E_-}f_{-1-2j}=(j+1) f_{-1-2(j+1)}$; on the positive tail, $L_{E_+}f_{1+2j}=(j+1)f_{1+2(j+1)}$ and $L_{E_-}f_{1+2j}=-j f_{1+2(j-1)}$ ([[lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points]](c)). The endpoint Casimir is $-\tfrac18$ there as well.

[F4] For each one-dimensional K-character, the isotypic projection is the Bochner integral $P_\chi v=\int_K\overline{\chi(k)}\Pi(k)v\,dk$ ([[def-compact-group-isotypic-projection]]).

[F5] The compact-adapted basis has $W=-iJ$, $E_\pm=(D\pm iS)/2$, and $L_Wf_m=mf_m$; for the standard real nilpotent matrices $N_+=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and $N_-=\begin{pmatrix}0&0\\1&0\end{pmatrix}$, one has $N_+=\tfrac i2(W-E_++E_-)$ and $N_-=-\tfrac i2(W+E_+-E_-)$ ([[def-k-finite-and-smooth-vectors-for-sl2-r]]).

[A1] AC supplies normalized Haar probability on $K$ and the Bochner-integral setup in [F1] and [F4] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The assumptions and notation in the Statement.

1.1 Put $u_t=\begin{pmatrix}1&t\\0&1\end{pmatrix}$ and $\ell_t=\begin{pmatrix}1&0\\t&1\end{pmatrix}$; their real infinitesimal generators are $N_+$ and $N_-$ from [F5]. If $(b_1,b_2)$ is the bottom row of $k_\theta g$, the Iwasawa cocycle in [F1] gives $\bigl(\Pi(g)f_m\bigr)(k_\theta)=(b_2-i b_1)^m(b_1^2+b_2^2)^{-(m+1)/2}$. For odd $m$, both exponents are integers. When $g=u_t$ or $g=\ell_t$, $b_1,b_2$ are affine in $t$; at $t=0$, $b_1^2+b_2^2=1$ and $b_2-i b_1=e^{i\theta}$. Compactness of $K$ gives a complex neighborhood of $t=0$, uniform in $\theta$, on which these factors are analytic and their denominators stay nonzero. Thus both orbit maps have power series converging uniformly on $K$, hence in $H$, and their Taylor coefficients are $L_{N_+}^k f_m/k!$ or $L_{N_-}^k f_m/k!$. By [F3] and [F5], these coefficients remain in the same algebraic positive or negative tail as $f_m$, so each small-$t$ orbit vector lies in the corresponding closed span $D_1^+$ or $D_1^-$. Unitarity in [F1] extends this inclusion from finite sums to each closure, and the inverse elements give equality. Every $u_t$ and $\ell_t$ is a product of elements with sufficiently small parameter. Moreover, for $s\ne0$, $u_s\ell_{-1/s}u_s=\begin{pmatrix}0&s\\-s^{-1}&0\end{pmatrix}$ and $\begin{pmatrix}0&s\\-s^{-1}&0\end{pmatrix}\begin{pmatrix}0&1\\-1&0\end{pmatrix}^{-1}=\operatorname{diag}(s,s^{-1})$. Hence the two unipotent subgroups generate every determinant-one matrix: if $g=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ has $a\ne0$, then $g=\ell_{c/a}\operatorname{diag}(a,a^{-1})u_{b/a}$; if $a=0$, then $c\ne0$ and $u_1g$ has nonzero upper-left entry. Thus both closed spans are G-invariant. [F1, F2, F3, F5, algebra]

2.1 Let $W$ be a nonzero closed G-invariant subspace of $D_1^+$. Since step 1.1 proves $D_1^+$ is G-invariant, $W$ is K-invariant. Choose $0\ne v\in W$. By [F2], $v$ has an orthogonal expansion in the lines $\mathbb C f_{1+2j}$, so some K-character projection $P_jv$ is nonzero. Its degree-one character integral from [F4] is a norm limit of sums of K-translates of $v$, all in $W$; closedness gives $f_{1+2j}\in W$ for some $j$. For real $X\in\mathfrak g$, the difference quotients $(\Pi(\exp(tX))w-w)/t$ for any smooth $w\in W$ lie in $W$ and converge in norm to $L_Xw$; complex linearity gives stability under $E_\pm$. The K-type vectors are smooth. By [F3], $L_{E_+}$ raises every positive-tail weight with coefficient $j+1\ne0$, while $L_{E_-}$ lowers it with coefficient $-j\ne0$ for $j>0$; the boundary coefficient at $j=0$ is zero. Iteration therefore gives every $f_{1+2k}\in W$. Their span is dense by [F2], so $W=D_1^+$. [F2, F3, F4, A1, step 1.1, algebra]

3.1 Let $W$ be a nonzero closed G-invariant subspace of $D_1^-$. Choose $0\ne v\in W$. By [F2], its orthogonal expansion in the lines $\mathbb C f_{-1-2j}$ has a nonzero coefficient; the corresponding K-character projection [F4] is a norm limit of K-translates in $W$, so $f_{-1-2j}\in W$ for some $j$. The difference-quotient argument of step 2.1 gives stability under $E_\pm$. If $j>0$, the nonzero coefficient $-j$ in $L_{E_+}f_{-1-2j}$ moves up to the boundary weight $-1$; from there the nonzero coefficients $j+1$ in $L_{E_-}$ generate every lower weight. Thus every $f_{-1-2k}$ lies in $W$, and density [F2] gives $W=D_1^-$. Hence both limits are irreducible. [F2, F3, F4, A1, step 1.1, step 2.1, algebra]

4.1 By [F1] and step 1.1, the restrictions to the closed limits are strongly continuous unitary representations. Their orthogonal direct sum is $I_{1,0}$ by [F2]; their K-type multiplicities and weights are [F2], and their Casimir scalar is [F3]. [F1, F2, F3, step 1.1] ∎
