---
dependency_level: 4
id: lem-gl3-homogeneous-fourier-mellin-kernel
kind: lemma
title: "Homogeneous Fourier–Mellin kernels and signed gamma identities"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-euler-gamma-function, thm-gamma-functional-equation, thm-gamma-meromorphic-continuation, thm-stirling-formula-gamma, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-identity-theorem-holomorphic-functions, thm-dominated-convergence, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, lem-gl3-mellin-inversion-and-holomorphic-flatness-criterion, def-countable-choice]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Distributions and Analytic Continuation of Dirichlet Series, (4.10)–(4.11), Lemma 4.52 and (4.58)"
      url: "https://arxiv.org/pdf/math/0403030v1"
---

## Statement

Assume Countable Choice. Set
$$G_0(s)=2(2\pi)^{-s}\Gamma(s)\cos(\pi s/2),\qquad G_1(s)=2i(2\pi)^{-s}\Gamma(s)\sin(\pi s/2).$$
For $\delta\in\{0,1\}$ the regular tempered kernel $K_{\delta,s}(x)=(\operatorname{sgn}x)^\delta|x|^{s-1}$, initially for $\operatorname{Re}s>0$, has a meromorphic continuation as a tempered-distribution family. Its only poles are simple, at $s=-j$ for nonnegative integers $j\equiv\delta\pmod2$, with residue $2(-1)^jD^j\delta_0/j!$. With the negative-sign Fourier transform,
$$\widehat K_{\delta,s}=(-1)^\delta G_\delta(s)K_{\delta,1-s}$$
as meromorphic distribution families. Moreover
$$G_\delta(s)G_\delta(1-s)=(-1)^\delta,\qquad sG_\delta(s)=-2\pi iG_{\delta+1}(s+1),$$
where parity indices are taken modulo two. The $G_\delta$ have polynomial growth on vertical strips for large imaginary part, locally uniformly in the real part. For every Schwartz $f$,
$$M_\delta\widehat f(s)=(-1)^\delta G_\delta(s)M_\delta f(1-s)$$
meromorphically in $s$. The Mellin transforms of Schwartz functions decay faster than every inverse power on vertical strips away from their finitely many poles at bounded height.

## Statement references

[Miller and Schmid, Lemma4.52 and (4.10)–(4.11), (4.58)](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]], the negative-sign Fourier convention, and parity $\delta$.

[F1] [[def-euler-gamma-function]], [[thm-gamma-functional-equation]] and [[thm-gamma-meromorphic-continuation]] give Euler's integral, its recurrence and meromorphic continuation.

[F2] [[thm-stirling-formula-gamma]] gives uniform sectorial Stirling asymptotics.

[F3] [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] gives the continuous transform and its square equal to reflection. [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]] identifies the transform of an L1 kernel with its ordinary integral.

[F4] [[thm-identity-theorem-holomorphic-functions]] gives analytic continuation of scalar identities. [[thm-dominated-convergence]] permits the absolutely dominated parameter limits below. [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]] fixes the holomorphic branch for complex powers in the right half-plane.

[F5] [[lem-gl3-mellin-inversion-and-holomorphic-flatness-criterion]] gives rapid vertical decay of Schwartz Mellin transforms on positive real strips by the logarithmic coordinate.

## Proof

**Given:** The stated data.

1.1 For a Schwartz test $\phi$ expand $\phi(x)+(-1)^\delta\phi(-x)$ at zero. Subtract its Taylor polynomial through degree $m$ inside the integral over $0<x<1$ and add back the explicit integrals of its monomials. This defines [F1, F4, given, algebra]
$$\begin{aligned}\langle K_{\delta,s},\phi\rangle={}&\int_0^1x^{s-1}\left(\phi(x)+(-1)^\delta\phi(-x)-2\!\sum_{\substack{0\le j\le m\\j\equiv\delta(2)}}\frac{\phi^{(j)}(0)}{j!}x^j\right)dx\\&+\int_1^\infty x^{s-1}\bigl(\phi(x)+(-1)^\delta\phi(-x)\bigr)dx+2\!\sum_{\substack{0\le j\le m\\j\equiv\delta(2)}}\frac{\phi^{(j)}(0)}{j!(s+j)}.\end{aligned}$$
Taylor remainder makes the first integral holomorphic for $\operatorname{Re}s>-m-1$; rapid decay does so for the second on every finite strip. Difference quotients are dominated after insertion of $1+|\log x|$, so [F4] proves these holomorphy claims. The same estimates bound the pairings by finite Schwartz seminorms locally away from the displayed poles. Increasing $m$ gives compatible expressions, since the monomials added and subtracted have exactly the same integrals. The residues are $2\phi^{(j)}(0)/j!$, which equal the stated delta-derivative residues. This constructs the meromorphic tempered family with exactly those poles. [F1, F4, given, algebra]

1.2 Fix $0<\operatorname{Re}s<1$ and $\epsilon>0$. The damped kernel $e^{-\epsilon|x|}K_{\delta,s}$ is L1. For $\operatorname{Re}p>0$ one has [F1, F3, F4, algebra]
$$\int_0^\infty x^{s-1}e^{-px}dx=\Gamma(s)p^{-s}.$$
For positive real $p$ this is the substitution $t=px$ in [F1]. Both sides are holomorphic in the right half-plane: dominated difference quotients for the integral use exponential decay at infinity and $\operatorname{Re}s>0$ at zero; the power uses the branch in [F4]. Their agreement on positive reals and [F4] prove the identity there. Hence [F3] gives
$$\widehat{e^{-\epsilon|\cdot|}K_{\delta,s}}(y)=\Gamma(s)\bigl((\epsilon+2\pi iy)^{-s}+(-1)^\delta(\epsilon-2\pi iy)^{-s}\bigr).$$
[F1, F3, F4, algebra]

1.3 On a fixed real strip $a\le\operatorname{Re}s\le b$ and for $|\operatorname{Im}s|$ large, [F2] applies in a fixed sector around the two imaginary directions. Writing $s=v+it$, its modulus gives [F1, F2, algebra]
$$|\Gamma(v+it)|\le C_{a,b}(1+|t|)^{v-1/2}e^{-\pi|t|/2}.$$
Indeed $|s^{s-1/2}e^{-s}|=|s|^{v-1/2}e^{-t\arg s-v}$ and $\arg(v+it)=\operatorname{sgn}(t)\pi/2-v/t+O_{a,b}(|t|^{-2})$. The sine and cosine factors are at most a constant times $e^{\pi|t|/2}$. Their exponentials therefore cancel the Gamma decay and leave a polynomial bound for $G_\delta$, uniformly in the real strip. Bounded-height regions are irrelevant to the stated large-height bound; any removable cancellations in a holomorphic product are bounded there by continuity. [F1, F2, algebra]

2.1 For fixed $s$ with $0<\operatorname{Re}s<1$, the absolute value of each term on the right is at most $C_s|y|^{-\operatorname{Re}s}$ for $y\ne0$, uniformly in $\epsilon>0$, since its argument has modulus at most $\pi/2$ and $|\epsilon\pm2\pi iy|\ge2\pi|y|$. This is locally integrable at zero and integrable against every Schwartz test at infinity. Taking $\epsilon\downarrow0$ therefore gives, as regular tempered distributions, [F1, F3, F4, step 1.1, step 1.2, algebra]
$$\Gamma(s)(2\pi|y|)^{-s}\bigl(e^{-i\pi s\operatorname{sgn}y/2}+(-1)^\delta e^{i\pi s\operatorname{sgn}y/2}\bigr)=(-1)^\delta G_\delta(s)K_{\delta,1-s}(y).$$
On the original side, dominated convergence against Schwartz tests gives $e^{-\epsilon|x|}K_{\delta,s}\to K_{\delta,s}$, so continuity of the Fourier transform in [F3] proves the identity on the whole line, including zero. No undetermined point-supported error is left. For any fixed test both sides extend meromorphically by step 1.1 and [F1]; the scalar identity theorem extends the equality everywhere. [F1, F3, F4, step 1.1, step 1.2, algebra]

3.1 Apply the Fourier transform twice in the initial strip. By [F3] and step 2.1 its value is both $(-1)^\delta K_{\delta,s}$ and $G_\delta(s)G_\delta(1-s)K_{\delta,s}$. Restricting to $x>0$, where the kernel is the nowhere-zero smooth function $x^{s-1}$, forces the claimed scalar product identity. It extends meromorphically by [F1] and [F4]. The other gamma identity follows directly from $\Gamma(s+1)=s\Gamma(s)$ and the sine/cosine shifts by $\pi/2$ in the two displayed definitions of $G$; it likewise extends meromorphically. [F1, F3, F4, step 2.1, algebra]

3.2 For $0<\operatorname{Re}s<1$, transpose the distribution identity of step 2.1 against $f\in\mathcal S$. Both endpoint kernels are ordinary integrable weights against Schwartz functions, so it reads [F1, F3, F4, F5, step 1.1, step 2.1, algebra]
$$M_\delta\widehat f(s)=(-1)^\delta G_\delta(s)M_\delta f(1-s).$$
Step 1.1 supplies the meromorphic continuation of every Mellin transform in this identity. To see rapid vertical decay on all strips, integration by parts gives $M_{\delta+1}f'(s+1)=-sM_\delta f(s)$ initially for $\operatorname{Re}s>0$. Meromorphic continuation preserves this identity. Iterate it until the real part is positive, then apply [F5] to the Schwartz derivative. Away from the fixed bounded-height poles the product of the linear denominators is polynomially bounded, and [F5] supplies arbitrarily rapid decay. This proves the final assertion and completes the proof. [F1, F3, F4, F5, step 1.1, step 2.1, algebra] ∎
