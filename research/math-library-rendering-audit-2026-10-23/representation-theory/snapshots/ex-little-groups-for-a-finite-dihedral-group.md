---
id: ex-little-groups-for-a-finite-dihedral-group
kind: example
title: "Little groups compute the irreducible characters of a dihedral group"
status: published
origin: pipeline
deps: ["thm-little-group-method-for-a-split-abelian-normal-subgroup", "cor-dihedral-groups-as-semidirect-products", "thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional", "thm-complex-nth-roots-and-roots-of-unity", "cor-cyclotomic-field-splits-a-finite-group", "def-conjugate-representation-and-inertia-group"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — Remark (4.2.7), printed p. 57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.2 (Clifford), printed p. 3"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
proof_strategy: direct
---

## Example

For $n\ge1$ let $D_{2n}=C_n\rtimes C_2=\langle r\rangle\rtimes\langle s\rangle$
with inversion $srs^{-1}=r^{-1}$. The linear characters
$\theta_k(r^j)=\exp(2\pi ijk/n)$ of $A=\langle r\rangle$ lie in the orbits
$\{\theta_k,\theta_{-k}\}$ under $s$. Each fixed character $k$ with
$2k\equiv0\pmod n$ has full stabilizer $C_2$ and contributes two linear
characters of $D_{2n}$; every other orbit $\{k,-k\}$ of size two contributes one
irreducible of degree two, induced from $C_n$. These exhaust
$\operatorname{Irr}(D_{2n})$: if $f=\gcd(2,n)$ is the number of fixed indices,
then there are $2f$ linear characters and $(n-f)/2$ characters of degree two,
with $2f+4\cdot(n-f)/2=2n=|D_{2n}|$. The degenerate cases $n=1$ and $n=2$ are
included.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the group $D_{2n}=\operatorname{Dih}(C_n)=C_n\rtimes C_2=\langle r\rangle\rtimes\langle s\rangle$ with inversion, its abelian normal subgroup $A=\langle r\rangle\cong C_n$ and complement $H=\langle s\rangle\cong C_2$, and the element $\zeta=\exp(2\pi i/n)$.

[F1] $\operatorname{Dih}(C_n)=C_n\rtimes C_2$ has $r^n=s^2=1$, $srs^{-1}=r^{-1}$ and every element of the form $r^j$ or $r^js$ with $0\le j<n$, uniquely; at the degenerate values $\operatorname{Dih}(C_1)\cong C_2$ and $\operatorname{Dih}(C_2)\cong C_2\times C_2$. ([[cor-dihedral-groups-as-semidirect-products]]).

[F2] For $G=A\rtimes H$ with $A$ abelian normal and $\theta\in\hat A$, the irreducible complex representations of $G$ are, up to isomorphism, the $\operatorname{Ind}_{I_\theta}^G(\widetilde\theta\otimes\operatorname{Infl}\sigma)$ for one $\theta$ per $H$-orbit in $\hat A$ and $\sigma\in\operatorname{Irr}(H_\theta)$, with $I_\theta=A\rtimes H_\theta$ and degrees $[H:H_\theta]\dim\sigma$. ([[thm-little-group-method-for-a-split-abelian-normal-subgroup]]).

[F3] Every irreducible representation of a finite abelian group over a splitting field has degree $1$; $\mathbb C$ is a splitting field for every finite group. ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]], [[cor-cyclotomic-field-splits-a-finite-group]]).

[F4] The $n$-th roots of unity in $\mathbb C$ are precisely the numbers $\exp(2\pi ik/n)$ for $0\le k<n$, and they are distinct. ([[thm-complex-nth-roots-and-roots-of-unity]]).

[F5] Conjugation acts on characters by ${}^g\theta(a)=\theta(g^{-1}ag)$, and $H_\theta$ is the stabilizer of $\theta$ in $H$. ([[def-conjugate-representation-and-inertia-group]]).

[A1] The number of residue classes $k$ modulo $n$ with $2k\equiv0\pmod n$ is $\gcd(2,n)$, equal to $1$ for odd $n$ and $2$ for even $n$.



## Verification

**Proof technique:** direct.

1.1 For each integer $k$ the formula $\theta_k(r^j):=\zeta^{jk}$ is a well-defined homomorphism $A\to\mathbb C^\times$, because $\zeta^n=1$ makes it independent of the representative $j$ modulo $n$, and $\theta_k(r^{j+l})=\zeta^{(j+l)k}=\theta_k(r^j)\theta_k(r^l)$. By [F3] every irreducible complex representation of the abelian group $A$ is one-dimensional, hence of this form, and by [F4] the $n$ functions $\theta_0,\dots,\theta_{n-1}$ are distinct (they take the distinct values $\zeta^k$ at $r$); so $\hat A=\{\theta_0,\dots,\theta_{n-1}\}$ with $\theta_k=\theta_{k'}$ exactly when $k\equiv k'\pmod n$. [F1, F3, F4, given, algebra]

2.1 The generator $s$ acts on $\hat A$ by ${}^s\theta_k=\theta_{-k}$: for all $j$, ${}^s\theta_k(r^j)=\theta_k(s^{-1}r^js)=\theta_k(r^{-j})=\zeta^{-jk}=\theta_{-k}(r^j)$, using $s=s^{-1}$ and [F5]. Hence the $H$-orbit of $\theta_k$ is $\{\theta_k,\theta_{-k}\}$, of size one exactly when $k\equiv-k\pmod n$, i.e. $2k\equiv0\pmod n$, and of size two otherwise; correspondingly $H_{\theta_k}=H$ in the first case and $H_{\theta_k}=1$ in the second. [F5, step 1.1, algebra]

3.1 Fixed case: if $2k\equiv0\pmod n$ then $H_{\theta_k}=C_2$ and $I_{\theta_k}=A\rtimes C_2=G$ by step 2.1, so [F2] lists the representations over $\theta_k$ as $\widetilde\theta_k\otimes\operatorname{Infl}\sigma$ with $\sigma\in\operatorname{Irr}(C_2)$; the group $C_2$ has exactly its two linear characters, of degree $1$, and $[H:H_{\theta_k}]=1$, so this orbit contributes two linear characters of $D_{2n}$. [F2, step 2.1]

3.2 Non-fixed case: if $2k\not\equiv0\pmod n$ then $H_{\theta_k}=1$ and $I_{\theta_k}=A=\langle r\rangle$ by step 2.1, so the only $\sigma$ is the trivial character of the trivial group and [F2] gives the single representation $\operatorname{Ind}_A^G\theta_k$, of degree $[H:1]\cdot1=2$, induced from $C_n$. The two members of the orbit induce isomorphic representations, since $\theta_k$ and $\theta_{-k}$ are conjugate under $s$ and [F2] uses one orbit representative; so each orbit of size two contributes exactly one irreducible of degree two. [F2, step 2.1]

4.1 Counting: by [A1] exactly $f=\gcd(2,n)$ indices $k$ modulo $n$ satisfy $2k\equiv0\pmod n$, so there are $2f$ linear characters by step 3.1 and the remaining $n-f$ characters of $\hat A$ form $(n-f)/2$ orbits of size two, contributing $(n-f)/2$ irreducibles of degree two by step 3.2; the sum of squares of the degrees is $2f\cdot1^2+\frac{n-f}{2}\cdot2^2=2f+2(n-f)=2n=|D_{2n}|$ by [F1], and by [F2] this list is exactly $\operatorname{Irr}(D_{2n})$ with no repetitions. [A1, F1, F2, step 3.1, step 3.2]

5.1 The degenerate cases are included. For $n=1$ one has $f=1$ by [A1] and $D_2\cong C_2$ by [F1], and the list consists of the two linear characters of $C_2$, with no degree-two character. For $n=2$ one has $f=2$ and $D_4\cong C_2\times C_2$ by [F1], and the list consists of the four linear characters, with no degree-two character; both agree with the classification of step 4.1 since $(n-f)/2=0$ in these cases. [A1, F1, step 4.1]

6.1 The example is verified: the characters $\theta_k(r^j)=\exp(2\pi ijk/n)$ of $C_n$ have $H$-orbits $\{k,-k\}$ by step 2.1; the fixed indices with $2k\equiv0\pmod n$ contribute two linear characters each by step 3.1; every other orbit contributes the single degree-two representation induced from $C_n$ by step 3.2; and by steps 4.1 and 5.1 these exhaust $\operatorname{Irr}(D_{2n})$ with the stated degree count, including $n=1$ and $n=2$. [step 2.1, step 3.1, step 3.2, step 4.1, step 5.1] ∎
