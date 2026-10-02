---
id: cor-coefficient-trace-residue-agreement
kind: corollary
title: "The abstract residue computes the coefficient-trace residue at every closed point"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - def-axiom-of-choice
  - def-field-norm-and-trace
  - def-perfect-field
  - def-residue-rational-differential-curve-point
  - lem-abstract-residue-basic-properties
  - lem-abstract-residue-trace-under-finite-free-extension
  - lem-uniformizer-differential-is-a-basis
  - thm-abstract-residue-exists-unique
  - thm-local-ring-smooth-curve-dvr
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the residue suppliers. Let $C$
be a smooth proper geometrically integral curve over a perfect field $k$ and
let $p$ be a closed point with residue field $\kappa(p)$, uniformizer $t$ and
a fixed coefficient field
$\kappa(p)\hookrightarrow\widehat{\mathcal O}_{C,p}$ identifying
$\widehat{\mathcal O}_{C,p}$ with $\kappa(p)[\![t]\!]$.

(1) If $\kappa(p)=k$, so that $\widehat{\mathcal O}_{C,p}=k[\![t]\!]$, and
$f=\sum_na_nt^n$, $g=\sum_mb_mt^m$ are elements of $k((t))$, then the
abstract residue of [[lem-abstract-residue-basic-properties]] satisfies
$$\operatorname{res}_p(f\,\mathrm dg) =\ \text{coefficient of }t^{-1}\text{ in }f(t)g'(t) =\sum_{n+m=0}ma_nb_m,$$
where $g'$ is the formal derivative of $g$.

(2) For an arbitrary closed point $p$ of $C$ and $\omega=f\,\mathrm dt$ with
$f\in k(C)$ expanded as $\sum_na_nt^n$ in $\kappa(p)((t))$, the abstract
residue equals the coefficient-trace residue of
[[def-residue-rational-differential-curve-point]]:
$$\operatorname{res}_p(\omega)=\operatorname{Tr}_{\kappa(p)/k}(a_{-1}).$$
In particular the two residue definitions used on this page agree at every
closed point of $C$, and the global residue theorem may be stated for either
of them.

## Facts & Assumptions

**Given:** a perfect field $k$, a smooth proper geometrically integral curve
$C$ over $k$, a closed point $p$, a uniformizer $t$ of
$\mathcal O_{C,p}$, the coefficient field
$\kappa(p)\hookrightarrow\widehat{\mathcal O}_{C,p}\cong\kappa(p)[\![t]\!]$
of [[def-residue-rational-differential-curve-point]], and the abstract
residues of [[thm-abstract-residue-exists-unique]] attached to the local
pairs below.

[F1] The abstract residue of [[thm-abstract-residue-exists-unique]] on a pair
$(V,A)$ with $fA<A$ for all $f$ in a commutative $k$-algebra $K$ is the
unique $k$-linear map $\operatorname{res}_V\colon\Omega^1_{K/k}\to k$ with
$\operatorname{res}_V(f\,\mathrm dg)=\operatorname{Tr}_V([f_1,g_1])$ on
suitable lifts. For $K=k((t))$, $V=k((t))$ and $A=k[\![t]\!]$, define the
formal derivation $D\colon K\to K\,\mathrm dt$ by
$D(\sum_m b_mt^m)=\sum_m m b_mt^{m-1}\,\mathrm dt$. It is a $k$-derivation,
so the universal property induces a $K$-linear map
$\Omega^1_{K/k}\to K\,\mathrm dt$ sending $\mathrm dg$ to $Dg$. This is a
map out of the algebraic Kähler differentials, not an identification of
$\Omega^1_{K/k}$ with $K\,\mathrm dt$; the formal derivative and its
Laurent-series convolution are used only to state the coefficient formula.

[F2] Basic properties of the abstract residue
([[lem-abstract-residue-basic-properties]]): $\operatorname{res}_V$ depends
only on the commensurability class of $A$; $\operatorname{res}_V=0$ whenever
$A$ is a $K$-submodule of $V$; and the continuity property: if
$fA+gA+fgA\subseteq A$ then $\operatorname{res}_V(f\,\mathrm dg)=0$. In
particular, for the pair $(k((t)),k[\![t]\!])$ and $h_1,h_2\in k[\![t]\!]$
one has $\operatorname{res}(h_1\,\mathrm dh_2)=0$.

[F3] Logarithmic and power residues
([[lem-abstract-residue-basic-properties]]): for $f\in K$ invertible and
every integer $n\ge0$ as well as every integer $n\le-2$ one has
$\operatorname{res}_V(f^n\,\mathrm df)=0$, and in particular
$\operatorname{res}_V(\mathrm df)=0$; if $g$ is invertible with
$gA\subseteq A$ then $\operatorname{res}_V(g^{-1}\mathrm dg)
=\dim_k(A/gA)$. For the pair $(k((t)),k[\![t]\!])$ and $g=t$ this gives
$\operatorname{res}(t^{-1}\mathrm dt)=\dim_k(k[\![t]\!]/tk[\![t]\!])=1$.

[F4] The coefficient-trace residue of
[[def-residue-rational-differential-curve-point]]: at a closed point with
$\kappa(p)/k$ finite separable and uniformizer $t$,
$\operatorname{res}_p(a\,\mathrm dt)=\operatorname{Tr}_{\kappa(p)/k}(a_{-1})$
for the Laurent expansion $a=\sum_na_nt^n$, and $\mathrm dt$ is a
$k(C)$-basis of $\Omega^1_{k(C)/k}$
([[lem-uniformizer-differential-is-a-basis]],
[[thm-local-ring-smooth-curve-dvr]]).

[F5] The finite-free-extension formula of
[[lem-abstract-residue-trace-under-finite-free-extension]]: if $K'$ is a
commutative $K$-algebra, free of finite rank with $K$-basis $x_1,\dots,x_r$,
$V$ is a $K$-module and $A\subseteq V$ satisfies $fA<A$ for all $f\in K$,
then with $V'=K'\otimes_KV$ and $A'=\sum_ix_i\otimes A$ one has
$f'A'<A'$ for all $f'\in K'$ and
$\operatorname{res}_{V'}(f\,\mathrm dg)
=\operatorname{res}_V(\operatorname{Tr}_{K'/K}(f)\,\mathrm dg)$ for all
$f\in K'$, $g\in K$.

[F6] The trace $\operatorname{Tr}_{K'/K}$ of a finite field extension is
$k$-linear and is computed by the trace of multiplication; if $K'=\kappa\otimes_kF$
for finite separable $\kappa/k$ and a field $F$ containing $k$, then in a
$k$-basis of $\kappa$ the trace of $\kappa((t))/k((t))$ is applied
coefficientwise ([[def-field-norm-and-trace]],
[[cor-algebraic-extensions-of-perfect-fields-are-separable]],
[[def-perfect-field]]).

[F7] The Axiom of Choice is [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct; compute the abstract residue of the Laurent
field monomial by monomial, then descend the coefficient trace through the
finite free extension $\kappa(p)((t))/k((t))$.

1.1 (The monomial residues.) In the pair $(V,A)=(k((t)),k[\![t]\!])$ one has $\operatorname{res}(t^n\,\mathrm dt)=0$ for every integer $n\ge0$ and every integer $n\le-2$ by the power-residue property [F3], applied to $f=t$; and $\operatorname{res}(t^{-1}\mathrm dt)=\dim_k(k[\![t]\!]/tk[\![t]\!])=1$ by the unit property [F3]. Hence $\operatorname{res}(t^n\mathrm dt)=\delta_{n,-1}$ in every characteristic, and by [F2] also $\operatorname{res}(h_1\,\mathrm dh_2)=0$ whenever $h_1,h_2\in k[\![t]\!]$. [F2, F3, given]

1.2 (The extension setup.) The local pair at $p$ is the pair over $k$ with $K'=\kappa(p)((t))$, $V'=K'=\kappa(p)((t))$ and $A'=\kappa(p)[\![t]\!]$; its residue is $\operatorname{res}_p$ on $\Omega^1_{\kappa(p)((t))/k}$, and the completion of the curve at $p$ identifies $\mathrm dt$ with the basis differential and $k(C)$ with a subfield of $\kappa(p)((t))$ by [F4]. The field $\kappa(p)$ is finite separable over $k$ by perfectness of $k$ ([F6]), so $\kappa(p)((t))=\kappa(p)\otimes_kk((t))$ is a free $k((t))$-module of finite rank $d=[\kappa(p):k]$ with basis any $k$-basis $x_1,\dots,x_d$ of $\kappa(p)$. [F1, F4, F6, given]

2.1 (Part (1) for finite Laurent polynomials.) Let $f=\sum_na_nt^n$ and $g=\sum_mb_mt^m$ be finite sums. The universal derivation satisfies $\mathrm d(t^m)=m t^{m-1}\mathrm dt$, hence $f\,\mathrm dg=\sum_{n,m}m a_nb_m t^{n+m-1}\mathrm dt$, a finite sum. By $k$-linearity of $\operatorname{res}$ and step 1.1 only the terms with $n+m-1=-1$ survive, each with residue its displayed coefficient. Thus $\operatorname{res}(f\,\mathrm dg)=\sum_{n+m=0}m a_nb_m$, the coefficient of $t^{-1}$ in $fDg$. [F1, step 1.1, algebra]

2.2 (Applying the extension formula.) Take $K=k((t))$, $V=K$, $A=k[\![t]\!]$, $K'=\kappa(p)((t))$ and $V'=K'$ as in step 1.2, with the $K$-basis $x_1,\dots,x_d$ of $K'$ given by a chosen $k$-basis of $\kappa(p)$. If $f\in K$ has order $r$, then $fA=t^rA$; for $r\ge0$ this is contained in $A$, while for $r<0$ the quotient $fA/A$ has finite $k$-dimension $-r$. Thus $fA<A$ for every $f\in K$. The associated subspace $A'=\sum_i x_i\otimes A$ identifies with $\kappa(p)\otimes_k k[\![t]\!]=\kappa(p)[\![t]\!]$, the lattice of the pair in step 1.2. Hence [F5] applies and gives $\operatorname{res}_{V'}(f\,\mathrm dg)=\operatorname{res}_{V}(\operatorname{Tr}_{K'/K}(f)\,\mathrm dg)$ for every $f\in K'$ and $g\in K$. [F2, F5, step 1.2]

3.1 (Part (1) in general.) Let $f,g\in k((t))$ have lower exponents $-M,-N$, respectively. Choose $R\ge\max(M,N)$ and truncate both: $f=f_0+r_f$, $g=g_0+r_g$, with $f_0,g_0$ finite Laurent polynomials and $r_f=t^{R+1}u$, $r_g=t^{R+1}v$ for $u,v\in k[\![t]\!]$. First, $r_f\,\mathrm dg_0$ is a finite sum of terms $m b_m(r_f t^{m-1})\,\mathrm dt$; each coefficient is regular since $m\ge-N$ and $R\ge N$, so its abstract residue is zero by [F2], applied to $h\,\mathrm dt=h\,\mathrm d t$ with $h,t\in k[\![t]\!]$. Next, for each monomial $a_nt^n$ of $f_0$, where $n\ge-M$, use $\mathrm dr_g=(R+1)t^Rv\,\mathrm dt+t^{R+1}\mathrm dv$. Both $(R+1)a_nt^{n+R}v$ and $a_nt^{n+R+1}$ are regular, so the two terms of $a_nt^n\,\mathrm dr_g$ have zero residue by [F2], applied respectively to a regular coefficient times $\mathrm d t$ and to $a_nt^{n+R+1}\,\mathrm d v$ with both factors regular. Finally $r_f,r_g$ are regular, so [F2] gives $\operatorname{res}(r_f\,\mathrm dr_g)=0$. By bilinearity, $\operatorname{res}(f\,\mathrm dg)=\operatorname{res}(f_0\,\mathrm dg_0)=[t^{-1}](f_0Dg_0)$ by step 2.1. The same truncation does not change the formal coefficient: $r_fDg_0$, $f_0Dr_g$, and $r_fDr_g$ all have order at least $0$, since $R\ge M,N$. Therefore $[t^{-1}](f_0Dg_0)=[t^{-1}](fDg)$, proving the coefficient formula for arbitrary Laurent series without identifying $\Omega^1_{K/k}$ with $K\,\mathrm dt$. [F1, F2, step 2.1, algebra]

3.2 (Coefficientwise trace.) For $f=\sum_na_nt^n\in\kappa(p)((t))$, multiplication by $f$ on the finite-dimensional $k((t))$-vector space $K'$ has matrix $\sum_n t^n M_{a_n}$ in the fixed basis $x_1,\dots,x_d$, where $M_{a_n}$ is the matrix of multiplication by $a_n$ on $\kappa(p)$ over $k$. Since the matrix has finitely many diagonal entries, its trace is $\sum_n\operatorname{tr}_k(M_{a_n})t^n=\sum_n\operatorname{Tr}_{\kappa(p)/k}(a_n)t^n$. This is the coefficientwise trace formula in [F6]; the basis is $\{x_i\}$, not a family indexed by powers of $t$. [F5, F6, step 2.2, algebra]

4.1 (Conclusion.) Let $\omega=f\,\mathrm dt$ with $f\in k(C)\subseteq\kappa(p)((t))$, expanded as $\sum_na_nt^n$, and take $g=t\in k((t))$. By steps 1.2 and 2.2, $\operatorname{res}_p(\omega)=\operatorname{res}^{V}(\operatorname{Tr}_{K'/K}(f)\,\mathrm dt)$; by step 3.2 and part (1) of step 3.1 applied in the base field, the right side is the coefficient of $t^{-1}$ in $\operatorname{Tr}_{K'/K}(f)$, namely $\operatorname{Tr}_{\kappa(p)/k}(a_{-1})$; this is exactly the coefficient-trace residue of [F4], so the two definitions agree at $p$, and by perfectness of $k$ this holds at every closed point of $C$. The Axiom of Choice [F7] is inherited from the residue suppliers. [F4, F5, F7, step 3.1, step 2.2, step 3.2] ∎
