---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-joukowski-biholomorphism-outside-unit-disc.json
  precheck: pass
id: thm-joukowski-biholomorphism-outside-unit-disc
kind: theorem
title: "The Joukowski map is a biholomorphism from the exterior disc onto $\\mathbb{C}\\setminus[-1,1]$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-slit-plane-root-branch-biholomorphism-to-a-sector, thm-homological-simple-connectivity-equivalences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let

$$E:=\{z\in\mathbb C:|z|>1\},\qquad \Omega:=\mathbb C\setminus[-1,1],$$

and define the Joukowski map by

$$J(z):=\frac12\left(z+\frac1z\right)\qquad(z\in E).$$

Then $J:E\to\Omega$ is a biholomorphism.

## Facts & Assumptions

**Given:** The exterior disc $E$, the slit-complement $\Omega$, and the map $J$ above.

[F1] For $n=2$, the slit-plane root branch $R_2(t)=\exp(\operatorname{Log}t/2)$ is a biholomorphism from $\mathbb C\setminus\{x\in\mathbb R:x\le0\}$ onto the right half-plane $\{s\in\mathbb C:\operatorname{Re}s>0\}$, with inverse $s\mapsto s^2$ ([[thm-slit-plane-root-branch-biholomorphism-to-a-sector]]).

## Proof

**Proof technique:** direct.

1.1 For $w\in\Omega$, put $m(w):=(w-1)/(w+1)$. If $m(w)$ were a nonpositive real number, then $w=(1+m(w))/(1-m(w))$ would lie in $[-1,1]$, contradicting $w\in\Omega$; also $m(w)\ne1$ because $(w-1)/(w+1)=1$ has no finite solution. Hence $m$ maps $\Omega$ holomorphically into the slit plane of [F1]. Define $s(w):=R_2(m(w))$, so $\operatorname{Re}s(w)>0$ for every $w\in\Omega$. [F1, given, construct, algebra]

2.1 Define $H(w):=(1+s(w))/(1-s(w))$ on $\Omega$. Since $s(w)\ne1$, this is holomorphic there; using $s(w)^2=m(w)$ gives $J(H(w))=\frac12\left(\frac{1+s}{1-s}+\frac{1-s}{1+s}\right)=\frac{1+s^2}{1-s^2}=\frac{1+m(w)}{1-m(w)}=w$, and $|1+s(w)|^2-|1-s(w)|^2=4\operatorname{Re}s(w)>0$ yields $|H(w)|>1$, so $H(\Omega)\subseteq E$. [F1, step 1.1, algebra]

3.1 For $z\in E$, put $s:=(z-1)/(z+1)$. Then $\operatorname{Re}s=(|z|^2-1)/|z+1|^2>0$, so $s$ lies in the right half-plane, and a direct calculation gives $(J(z)-1)/(J(z)+1)=((z-1)/(z+1))^2=s^2$. By [F1], the right-half-plane inverse of squaring is exactly $R_2$, so $R_2((J(z)-1)/(J(z)+1))=s$, and substituting this into the definition of $H$ yields $H(J(z))=(1+s)/(1-s)=z$. [F1, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 show that $J$ and $H$ are holomorphic two-sided inverses between $E$ and $\Omega$. Therefore $J:E\to\Omega$ is a biholomorphism. [step 2.1, step 3.1] ∎

## Remarks

The shaded regions below are finite windows into the open domains $E$ and $\Omega$; the circular disc and the slit are omitted. The arrow denotes the biholomorphism on these open domains.

```tikz
\begin{tikzpicture}[scale=0.95,>=stealth]
  \fill[blue!15] (-5.1,-1.55) rectangle (-1.5,1.55);
  \fill[white] (-3.3,0) circle (1);
  \draw[dashed,thick] (-3.3,0) circle (1);
  \node at (-3.3,0) {$|z|\leq 1$};
  \node at (-3.3,1.95) {$E=\{z:|z|>1\}$};
  \node at (-3.3,-1.95) {omitted closed disc};
  \draw[->,thick] (-1.15,0.25) -- (1.15,0.25)
    node[midway,above=5pt] {$J(z)=\frac12(z+z^{-1})$};
  \fill[blue!15] (1.5,-1.55) rectangle (5.1,1.55);
  \draw[red!70!black,dashed,very thick] (2.3,0) -- (4.3,0);
  \draw[red!70!black,fill=white] (2.3,0) circle (0.055);
  \draw[red!70!black,fill=white] (4.3,0) circle (0.055);
  \node[below=5pt] at (2.3,0) {$-1$};
  \node[below=5pt] at (4.3,0) {$1$};
  \node at (3.3,1.95) {$\Omega=\mathbb C\setminus[-1,1]$};
  \node at (3.3,-1.95) {omitted closed slit};
\end{tikzpicture}
```

The same rational formula is defined on the unit circle and gives $J(e^{it})=\cos t$. Thus each point of $(-1,1)$ has the two boundary preimages $e^{it}$ and $e^{-it}$, where $0<t<\pi$; the endpoints $1$ and $-1$ have the single boundary preimages $1$ and $-1$, respectively. These are boundary values, and the diagram makes no assertion of a biholomorphism on the boundaries. The inverse on $\Omega$ uses exactly the branch in the proof: $s(w)=\exp(\operatorname{Log}((w-1)/(w+1))/2)$ with $\operatorname{Re}s(w)>0$, followed by $H(w)=(1+s(w))/(1-s(w))$. The proof is independent of the illustration.
