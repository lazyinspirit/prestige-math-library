# Full-text source passages actually read

Source hashes and local PDF/text carriers are in `repair.json`. The snippets below transcribe only the decisive passages; they are not a claim to have read each complete textbook. Statement/proof ranges in the proposed rows identify the backing, and their strategies identify every local extension.

**Teschl, Partial Differential Equations, archived manuscript**, <https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf>. Printed p.153, Theorem 6.11:

> Suppose f in C([0,infinity) x Rn) is bounded and uniformly Hölder continuous with respect to the second argument on compact sets with respect to the first argument: |f(t,x)-f(t,y)| <= C_T |x-y|^gamma, 0<=t<=T. (6.46)
>
> Then u(t,x) := integral_0^t integral_Rn Phi(t-s,x-y) f(s,y)dy ds ... is in C^{1;2}((0,infinity)xRn) intersect C([0,infinity)xRn) and solves the inhomogeneous heat equation with initial condition u(0,x)=0.

Printed p.158, Theorem 6.15:

> If a subsolution of the heat equation ... attains its maximum at (t0,x0) ... then u is constant on U_{t0}.

The full proof paragraph was read: submean equality first gives constancy in a heat ball, then backward propagation reaches earlier points. Printed p.159, Theorem 6.17/(6.61), records initial/boundary/forcing bounds and uniqueness. The proposed stability row applies that same comparison to barriers using the integrated timewise forcing supremum, rather than the coarser T sup forcing.

Printed p.160, Problem 6.13, explicitly assumes g restricted to the boundary equals a before claiming a heat solution continuous on the closed cylinder. Printed pp.160–161, (6.67)–(6.68), defines E=one half integral u² and computes E'=integral u Delta u=-integral |grad u|² by Green's first identity. The forced row keeps the additional integral fu after substituting u_t=Delta u+f.

**Oh, Lecture Notes for Math 222A (19 March 2024)**, <https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf>. Printed pp.83–84, §5.3, gives the forward forcing solution formula and the initial-data solution formula. Proposition 5.5 states homogeneous heat solutions are smooth; the following paragraph explains the fundamental kernel is smooth away from (0,0). The proposed forcing smoothing row applies the published quantitative derivative estimates with an explicit epsilon separation from the source diagonal, not the homogeneous proposition to arbitrary active forcing.

Printed pp.89–90, Theorem 5.12(2):

> ... if U is connected and there exists (t0,x0) ... such that u(t0,x0)=max u, then u is constant ... to the past of t=t0.

The proof was read through its mean-value equality and polygonal path propagation. This is the positivity row's exact backward constancy mechanism and explains the necessary earlier nontriviality qualification.

**Jakobsen, An Introduction to Partial Differential Equations (arXiv:1901.03022)**, <https://arxiv.org/pdf/1901.03022>. Chapter 4, printed pp.19–21, lists initial data u(x,t0)=phi(x), Dirichlet boundary conditions, and the zero-temperature lateral boundary example. The proposed corner row directly compares those two prescribed limiting values; the chapter does not by itself prove compatibility at a corner.

§9.1, printed pp.109–111, gives the homogeneous parabolic separated equation and N'(t)/N(t)=-LM/(rho M), then LM=lambda rho M. §10.3.2, printed pp.144–145, (344)–(347), gives the zero-temperature interval heat problem and the separated factors exp(-(pi k c/l)^2 (t-tau)) sin(pi k x/l). The finite backward-sum row uses these explicit factors with terminal time T and verifies the finite sum term by term; no convergence of an infinite backward expansion is inferred.

**Published PDE-7 exact analyticity interface**, `items/thm-positive-time-spatial-analyticity-of-heat-kernel-solutions.md`, was read in full. Its theorem covers every 1<=p<=infinity and every positive time, gives the Taylor expansion with factorial bounds, and asserts equality for all real shifts. It cites Hunter, <https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf>, printed p.137 after Proposition 5.14. The proposed terminal support obstruction uses this exact published supplier; it does not pretend Oh's C-infinity claim supplies analyticity. The published real analytic interval identity theorem's statement/proof was read to justify vanishing on lines.

**Published complex integral interfaces**, `items/thm-holomorphic-parameter-riemann-integral.md` and `items/cor-holomorphic-functions-are-closed-for-local-uniform-convergence.md`, were read in full. The former's finite interval and joint continuity hypotheses apply to the truncated one-dimensional Gaussian, and the latter applies after uniform compact-parameter Gaussian tail control. The real Gaussian and holomorphic identity theorem already declared in the definition finish the parameter identity; product Fubini is explicitly added.
