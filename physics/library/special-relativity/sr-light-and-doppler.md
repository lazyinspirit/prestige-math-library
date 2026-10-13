---
page: sr-light-and-doppler
title: 'Light and Doppler'
status: published
library: physics
items: [lem-sr-metric-duality-on-lorentz-vector-space,
        def-sr-affine-phase-and-wave-covector,
        lem-sr-future-causal-pairing-negative,
        lem-sr-null-covector-frame-data,
        lem-sr-null-covector-boost-transformation,
        lem-sr-phase-rate-along-worldline,
        def-sr-null-wave-covector-and-observer-frequency,
        post-sr-ideal-plane-wave-model,
        pthm-sr-null-wave-doppler-and-aberration,
        rem-sr-doppler-dimensional-restoration]
examples: []
---

This page develops the wave and Doppler structure of the flat classical
special-relativity model from explicit linear algebra on the affine Minkowski
space, and then compares inertial descriptions of one ideal plane wave. The
mathematical layer comes first. The metric pairing of a Lorentz vector space is
a linear bijection onto the algebraic dual and supplies the raised covector
$k^\sharp$ of a wave covector with its orthonormal-basis components
([[lem-sr-metric-duality-on-lorentz-vector-space]]); affine phase functions on
affine Minkowski space, their level sets and kernels, and the terminology of
null, future, past and causal wave covectors are fixed without any physical
interpretation or units ([[def-sr-affine-phase-and-wave-covector]]). A future
timelike vector pairs negatively with every nonzero future causal vector
([[lem-sr-future-causal-pairing-negative]]), which is what makes the frame data
$(\varpi,s)$ of a future null wave covector well defined with $\varpi>0$ and
$|s|=1$ and the raised vector the future null vector $\varpi(e_0+s)$
([[lem-sr-null-covector-frame-data]]). The frame data transforms under a
passive boost by the exact component law, the factor
$\varpi'=\gamma(1-\beta\cdot s)\varpi$ and the direction formula
([[lem-sr-null-covector-boost-transformation]]), and the phase rate along any
future timelike worldline is the wave covector evaluated on the four-velocity,
with $k(U)<0$ for future null $k$ ([[lem-sr-phase-rate-along-worldline]]).

The physical vocabulary is then attached by definitions and an adopted model,
not by deduction. The SI conventions give the angular frequency, linear
frequency, wave vector, wavelength and propagation direction of a future null
wave covector and the observer frequency $\omega_n=-ck(n)=-k(U_o)$ with the
sign convention that makes it positive
([[def-sr-null-wave-covector-and-observer-frequency]]); the ideal plane-wave
model adopts the phase, wave-front, ray and reading assumptions explicitly, with
its exclusions listed ([[post-sr-ideal-plane-wave-model]]). Conditionally on
that model, one ideal wave between two inertial descriptions related by a boost
has the transformed frame data and the frequency and wavelength ratios, the two
longitudinal shifts, both transverse protocols with their different factors
$\gamma$ and $1/\gamma$, and the aberration law
$\cos\theta'=(\cos\theta-|\beta|)/(1-|\beta|\cos\theta)$
([[pthm-sr-null-wave-doppler-and-aberration]]). A closing remark fixes the
units, the two coordinate forms and the natural-unit restoration table
([[rem-sr-doppler-dimensional-restoration]]).

Nothing on this page measures anything. The postulates are adopted
idealizations, the theorem is a conditional deduction from them, and its
exclusions (media, dispersion, modulation, intensity, polarization, sources,
detectors, accelerating observers, gravitation and quantum effects) travel to
every consumer. Empirical tests of the model belong to the framework's
experimental work. The companion page works the transformations out at
$\beta=3/5$ and refutes one universal transverse-Doppler claim.
